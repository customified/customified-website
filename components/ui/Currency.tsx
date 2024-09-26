import { useEffect, useState } from "react";


const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
});

interface currencyProps{
    data: number | string 
}

const Currency: React.FC<currencyProps> = ({data}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(data))}
        </div>
    );
};

export default Currency;
