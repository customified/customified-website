import {  Product } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`
const GetProduct = async(slug: string ,options: { cache?: string } = {} ): Promise<Product> =>{

    const res = await fetch(`${URL}/${slug}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': options.cache || 'default',
        },
    })

    return res.json()

}

export default GetProduct