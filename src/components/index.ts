import {ProductCard as ProductCardComponent} from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import {ProductTitle} from "./ProductTitle";
import {IProductCardProps} from "../interfaces";

export {ProductImage} from "./ProductImage";
export {ProductButtons} from "./ProductButtons";
export {ProductTitle} from "./ProductTitle";

export type {ProductButtonsProps} from "./ProductButtons";
export type {ProductImageProps} from "./ProductImage";
export type {ProductTitleProps} from "./ProductTitle";

export const ProductCard:IProductCardProps = Object.assign(ProductCardComponent, {
    Title:      ProductTitle,
    Image:      ProductImage,
    Buttons:    ProductButtons,
});

export default ProductCard;