import {useContext} from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import {ProductContext} from "./ProductCard";

export interface ProductImageProps {
    img?:string;
    className?:string;
}

export const ProductImage = ({className=""}: ProductImageProps) => {
    const {product} = useContext(ProductContext);
    return (<img className={`${styles.productImg} ${className}`} src={product.img ? product.img : noImage} alt="coffee mug"/>);
}
