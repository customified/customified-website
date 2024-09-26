import { Order } from "@/types"; // Adjust the import if your type is named differently

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders/byemail`;

const GetOrdersByEmail = async (emailId: string, options: { cache?: string } = {}): Promise<Order[]> => {
    try {
        const res = await fetch(`${URL}?emailId=${encodeURIComponent(emailId)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': options.cache || 'default',
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch orders: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching orders by email:", error);
        throw error;
    }
};

export default GetOrdersByEmail;


