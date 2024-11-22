export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
};

export interface Product {
    id: string;
    name: string;
    price: string;
    isFeatured: boolean;
    color: Color;
    size: Size;
    category: Category;
    images: Image[];
}; 

export interface Image {
    id: string;
    url: string;
};

export interface Color {
    id: string;
    name: string;
    value: string;
};

export interface Size {
    id: string;
    name: string;
    value: string;    
};