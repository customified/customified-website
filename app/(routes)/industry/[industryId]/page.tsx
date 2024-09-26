import GetProducts from "@/actions/get-products";
import { Billboard } from "@/components/Billboard";
import Container from "@/components/ui/Container";

import GetIndustry from "@/actions/get-industry";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";

export const revalidate = 0

interface CategoryPageProps {
    params: {
        industryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {


    const products = await GetProducts()

    const industry = await GetIndustry(params.industryId)

    const filteredProducts = products.filter(product => 
        product.industries?.some(industry => industry._id === params.industryId)
    );
   

    return (
        <div className="bg-white py-10">
            <Container>
                <Billboard 
                    data={industry.billboardId}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                      
                        <div className="mt-6 lg:col-span-5 lg:mt-0 px-10 justify-center items-center">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
                              {filteredProducts.map((item)=>(
                                  <ProductCard 
                                  key={item._id}
                                  data={item}
                                  />
                              ))}

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage