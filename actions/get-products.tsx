import { CustomizationType, Product } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products` 

interface Query{
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatured?: boolean
}

const GetProducts = async( options: { cache?: string } = {}): Promise<Product[]> =>{
    // const url = qs.stringifyUrl({
    //     url: URL,
    //     query: {
    //         colorId: query.colorId,
    //         sizeId: query.sizeId,
    //         categoryId: query.categoryId,
    //         isFeatured: query.isFeatured,
    //     },
    // })
    
    const res = await fetch(URL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': options.cache || 'public',
        },
    })
    return res.json()

}

export default GetProducts