/* eslint-disable @typescript-eslint/no-unused-vars */
 
 import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ROUTE}/products`;

interface Query {
    colorId?: string;
    sizeId?: string;
    categoryId?: string;
    isFeatured?: boolean;
}
export const getProducts = async (query: Query): Promise<Product[]> => {

    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

        const res = await fetch(url);
        return res.json();

} 