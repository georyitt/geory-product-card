import {useContext} from "react";
import {ProductContext} from "./ProductCard";

export interface ProductTitleProps {
    className?:string;
}

export const ProductTitle = ({className=""}: ProductTitleProps) => {
    const {product} = useContext(ProductContext);

    return (<span className={`${className}`}>{product.title}</span>)
}