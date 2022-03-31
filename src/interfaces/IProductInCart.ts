import {IProduct} from "./IProduct";

export interface IProductInCart extends IProduct {
    count: number;
}