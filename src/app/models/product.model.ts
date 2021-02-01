export interface Product {
    id: string;
    title: string;
    description: string;
    productTypesId: number;
    negotiate: boolean;
    createdAt: Date;
    createdByMemberId: number;
    acceptExchange: boolean;
}
