import GetCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import GetProducts from "@/actions/get-products";
import FilteredProducts from "@/components/FilteredProducts";
import Categories from "@/components/homepageui/Categories";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types";
import Image from "next/image";

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const categories = await GetCategories()
    const cat = categories

    const category = await getCategory(params.categoryId, { cache: "no-store" });
    const prod = await GetProducts();
    const filteredProducts = prod.filter(product => product.isFeatured)

    const products = prod.filter(product => {
        const isMainCategoryMatch = product.category?._id === params.categoryId;
        // Checking if any of the additional categories match
        const isAdditionalCategoryMatch = product.additionalCategories?.some(
            additionalCategory => additionalCategory === category.name 
        );

        return isMainCategoryMatch || isAdditionalCategoryMatch;
    });

    const productsWithAdditionalCategories = products.filter(product => {
        return product.additionalCategories && product.additionalCategories.length > 0;
    });

    const productsWithoutAdditionalCategories = products.filter(product => !product.additionalCategories || product.additionalCategories.length === 0);

    const groupedProducts = productsWithAdditionalCategories.reduce((acc, product) => {
        product.additionalCategories?.forEach(category => {
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
        });
        return acc;
    }, {} as Record<string, Product[]>);

    const hasSubCategories = Object.keys(groupedProducts).length > 0;

    return (
        <div className="bg-white pb-10 pt-5">
            <Container>
                {category.name === "Wristbands" && (
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

                {/* <Billboard data={category.billboardId} /> */}
                <FilteredProducts
                    groupedProducts={groupedProducts}
                    products={products}
                    hasSubCategories={hasSubCategories}
                />
                <Categories cat={cat} data={prod} />
                {/* Top Products list */}
                <div className={`flex flex-col gap-8 px-4 sm:px-6 lg:px-8 items-center justify-center pb-10 pt-4`}>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl md:text-3xl font-semibold text-black" id='products'><span className="text-[#097392]">Top </span>Products</h1>
                        <h2 className="text-base md:text-lg text-gray-600 text-center">Discover What{`'`}s Hot and Trending Now</h2>
                    </div>
                    <div className="flex">
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-5">
                            {filteredProducts.map(product => (
                                <div className="col-span-1" key={product._id}>
                                    <ProductCard data={product} key={product._id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <CategoryList category={categories}/> */}
            </Container>
        </div>
    )
}

export default CategoryPage;
