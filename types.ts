export interface Billboard {
    id: string
    label: string
    imageUrl: string
};

export interface Category {
    _id: string
    name: string
    billboardId: Billboard
    image: string
}

export interface Industry {
    _id: string;
    billboardId: Billboard;
    name: string;
    image: string;
}

export interface Product {
    _id: string;
    category: Category;
    description?: string;
    industries?: Industry[];
    additionalCategories?: string[];
    name: string;
    isFeatured: boolean;
    isArchived: boolean;
    customizations: Customization[];
    images: string[];
    upgrades: Upgrade[];
    stock: number;
    deliveryCosts: DeliveryCost;
    createdAt: string;
    storeId: string;
}

export interface AdditionalCategory {
    id: string;
    name: string;
    type: string;
}

export interface Image {
    id: string
    url: string
}

export interface Customization {
    id: string;
    name: string;
    type: CustomizationType;
    options?: CustomizationOption[];
}

export enum CustomizationType {
    Size = 'Size',
    Color = 'Color',
    Text = 'Text',
    Image = 'Image',
    Quantity = 'Quantity'
}

export interface CustomizationOption {
    id: string;
    name: string;
    value: string;
    mediaUrl?: string;
    prices?: { min: string; max: string; price: string }[];
}

export interface Upgrade {
    _id: string;
    name: string;
    mediaUrl: string;
    priceTiers: { min: string, max: string, price: string }[];
}

export interface DeliveryCost {
    _id: string;
    category: string;
    priceTiers: { min: string, max: string, price: string }[];
}

export interface Cart {
    id: string;
    product: {
        id: string;
        image: string;
        name: string;
    };
    category: string | null;
    quantity: number;
    productSize: string | undefined;
    quantities: { [key: string]: number };
    upgrades: { [key: string]: Upgrade };
    unitCost: number | string;
    totalCostWithoutDelivery: number;
    totalDeliveryCost: number
    totalCost: number;
    design?: {
        front: {
            userdesign : string | null;
            textproperties: Array<{ text: string; fontFamily: string; fill: string }> | null;
            imagesInDesign: string[] | null;
        } | null ,
        back: {
            userdesign : string | null;
            textproperties:  Array<{ text: string; fontFamily: string; fill: string }> | null;
            imagesInDesign: string[] | null;
        } | null
    }
}

export interface Order {
    _id: string;
    storeId: string;
    isPaid: boolean;
    username: string;
    useremail: string;
    address: string;
    phone: string;
    status: string;
    createdAt: string;
    orderItems: Array<{
        product: {
            _id: string;
            name: string;
            image: string;
            category: string | null;
            quantity: number;
            productSize: string | undefined;
            quantities: { [key: string]: number };
            upgrades: { [key: string]: Upgrade };
            unitCost: number | string;
            totalCost: number;
            design?: {
                front: {
                    userdesign : string | null;
                    textproperties: Array<{ text: string; fontFamily: string; fill: string }> | null;
                    imagesInDesign: string[] | null;
                } | null ,
                back: {
                    userdesign : string | null;
                    textproperties:  Array<{ text: string; fontFamily: string; fill: string }> | null;
                    imagesInDesign: string[] | null;
                } | null
            }
        }
    }>;
}






