import {IProduct} from "./IProduct";

export interface IProductContextProps {
    counter: number;
    product: IProduct;
    increaseBy: (value: number) => void;
    maxCount?: number;
}