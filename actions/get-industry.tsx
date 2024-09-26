import { Industry } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/industries` 
const GetIndustry = async(id: string): Promise<Industry> =>{

    const res = await fetch(`${URL}/${id}`)
    return res.json()

}

export default GetIndustry

