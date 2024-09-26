import { Order } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const GetOrder = async(id: string ,options: { cache?: string } = {} ): Promise<Order> =>{

    const res = await fetch(`${URL}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': options.cache || 'default',
        },
    })

    return res.json()

}

export default GetOrder