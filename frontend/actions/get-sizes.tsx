 
 import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ROUTE}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
        const res = await fetch(URL);
        return res.json();
} 