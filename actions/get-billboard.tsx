import { Billboard } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards` 
const GetBillboard = async(id: string): Promise<Billboard> =>{

    const res = await fetch(`${URL}/${id}`)

    return res.json()

}

export default GetBillboard