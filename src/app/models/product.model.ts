export interface Product {
    title: string;
    description: string;
    productTypesId: number;
    negotiate: boolean;
    createdAt: Date;
    createdByMemberId: number;
    acceptExchange: boolean;
    file?: string[];
}