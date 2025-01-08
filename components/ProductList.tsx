import { Product } from "@/types";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface ProductListProps{
    title: string;
    items: Product[]
}
const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
  return (
    <div className="space-y-3">
        <h3 className="font-bold text-3xl">{title}</h3>
        {items.length === 0 && <NoResults/>}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item)=>(
                <div key={item._id}>
                    <ProductCard key={item._id} data={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList