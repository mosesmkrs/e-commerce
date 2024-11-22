 
 import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ROUTE}/colors`;

export const getColors = async (): Promise<Color[]> => {
        const res = await fetch(URL);
        return res.json();
} 