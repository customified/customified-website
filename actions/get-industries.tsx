import { Industry } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/industries` 
const GetIndustries = async(): Promise<Industry[]> =>{

    const res = await fetch(URL)
    return res.json()

}

export default GetIndustries

