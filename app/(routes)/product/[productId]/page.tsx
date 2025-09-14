
import GetProduct from "@/actions/get-product"
import GetProducts from "@/actions/get-products"
import Info from "@/components/Info"
import ProductList from "@/components/ProductList"
import Gallery from "@/components/gallery"
import Container from "@/components/ui/Container"
import PriceChart from "@/components/ui/PriceChart"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb"
import { HomeIcon } from "lucide-react"
import Image from "next/image"


interface ProductPageProps {
    params: {
        productId: string
    }
}

export const revalidate = 0 

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await GetProduct(params.productId, { cache: 'no-store' })


// when backend connected .. 
    // const suggestedProducts = await GetProducts({
    //     category._id: product?.category?._id
    // })
    const products = await GetProducts({ cache: 'no-store' })

    const filteredProducts = products.filter(prod => {
        return (
            prod.category?._id === product?.category?._id &&
            !(prod.additionalCategories?.includes('Accessories'))
        );
    });

    const accessoryProducts = products.filter(product => product.additionalCategories?.includes('Accessories') )

    return (
        <div className="bg-white ">
            <Container >
                {product.category.name === "Wristbands" && (
                    <div className="mb-6 flex justify-center">
                        <Image
                            src="/offerQuantityBanner.webp"
                            alt="Offer Quantity Banner"
                            width={1920}
                            height={200}
                            className="w-full h-auto"
                        />
                    </div>
                )}
                <div className="px-4 py-10 sm:px-6 lg:px-8 ">
                    <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-x-12 ">
                        <div className="gap-5 flex flex-col justify-center md:sticky md:top-10 md:left-0 bg-white">

                            {/* breadcrumb */}
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/"><HomeIcon  className="w-4 h-4"/></BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/category/${product.category._id}`}>{product.category.name}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            {/*  */}
                            
                            <Gallery images={product.images} data={product}/>
                           
                        </div>
                        <div className="sm:mt-16 px-0 lg:mt-0">
                            <Info data={product} items={product.additionalCategories?.includes('Accessories') ? accessoryProducts : filteredProducts} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <PriceChart product={product} />
                    <ProductList title="Related Items" items={filteredProducts.slice(0, 4)} />
                </div>
            </Container>
        </div>
    )
}

export default ProductPage