export interface ProductPayload {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    isActive: boolean;
}

export interface Paginate<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    hasNextPage: boolean;
    hasPreventPage: boolean;
}


export interface Category {
    id: number;
    name: string;
}

export interface ProductWithCategory extends ProductPayload {
    category: Category
}