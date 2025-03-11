import { Cart } from "@/types";
import { useCart } from "./useCartStore";
import { useSvgStore } from "./useSvgStore";
import { useProductStore } from "./useProductStore";
import { usePriceStore } from "./usePriceStore";
import { dataURLtoFile, isCanvasBlank } from "@/lib/utils";
import { useCanvasStore } from "./useCanvasStore";
import axios from "axios";
import { useRouter } from 'next/navigation';

const uploadToCloudinary = async (canvasSnapshot: string, product: string, productSize: string, index: number = 0) => {
  const canvasFile = dataURLtoFile(canvasSnapshot, `${product}-${productSize}-${index}-${Date.now()}.png`);

  if (canvasFile) {
    const formData = new FormData();
    formData.append('file', canvasFile);
    formData.append('upload_preset', `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`);
    formData.append('folder', 'designs');

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
    return response.data.secure_url;
  }

  return null;
};

const processCanvas = async (
  canvasType: 'front' | 'back',
  cloudinaryUrl: string | null,
  product: string,
  productSize: string
) => {
  const { getCanvasDataURL, getCanvasElement, getTextProperties, getCanvasImages } = useCanvasStore.getState();
  const canvasSnapshot = getCanvasDataURL(canvasType);
  const canvasElement = getCanvasElement(canvasType);

  let designUrl = cloudinaryUrl;

  if (!designUrl && canvasSnapshot && canvasElement && !isCanvasBlank(canvasElement)) {
    try {
      designUrl = await uploadToCloudinary(canvasSnapshot, product, productSize || '', 0);
    } catch (error) {
      console.error(`Error uploading ${canvasType} canvas image to Cloudinary:`, error);
    }
  }

  const textProperties = getTextProperties(canvasType);
  const canvasImages = getCanvasImages(canvasType);

  const uploadedImages = await Promise.all(
    canvasImages.map((image, index) => uploadToCloudinary(image, product, productSize || '', index))
  );

  return {
    userdesign: designUrl,
    textproperties: textProperties,
    imagesInDesign: uploadedImages
  };
};

const addToCart = async (router: ReturnType<typeof useRouter>) => {
  const { product, category, quantity, productSize, lanyardLength, quantities, upgrades, image, productID, frontDesignUrl, backDesignUrl, orderNote, deliveryDate } = useProductStore.getState();
  const { unitCost, totalCost, totalCostWithoutDelivery, totalDeliveryCost } = usePriceStore.getState();
  const { color, font, text, textColor } = useSvgStore.getState();

  const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  if (quantity === 0) {
    alert("Please enter Quantity");
    return;
  }

  if (category === 'Lanyards' && !lanyardLength) {
    alert("Please select a lanyard length");
    return;
  }

  if (!frontDesignUrl && !backDesignUrl && category !== 'Lanyards') {
    alert("Are you sure you want to continue without a design?");
  }

  const frontDesign = category === 'Lanyards' ? {
    userdesign: null,
    textproperties: [{
      text: text === 'Your text here' ? '' : text,
      fontFamily: font,
      fill: textColor
    }],
    imagesInDesign: null
  } : await processCanvas('front', frontDesignUrl, product, productSize? productSize : '');

  const backDesign = category === 'Lanyards' ? null : await processCanvas('back', backDesignUrl, product, productSize? productSize : '');

  const cartItem: Cart = {
    id: `${product}-${productSize}-${Date.now()}`,
    product: {
      id: productID,
      image: image,
      name: product
    },
    category,
    quantity,
    productSize,
    lanyardLength,
    quantities,
    upgrades,
    unitCost,
    totalCostWithoutDelivery,
    totalDeliveryCost,
    totalCost,
    orderNote,
    deliveryDate,
    design: {
      front: frontDesign,
      back: backDesign
    }
  };

  try {
    useCart.getState().addItem(cartItem);
    router.push('/cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    alert('Failed to add item to cart');
  }
};

export default addToCart;
