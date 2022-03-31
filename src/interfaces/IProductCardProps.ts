import {ProductCardProps} from "../components/ProductCard";
import {ProductButtonsProps, ProductImageProps, ProductTitleProps} from "../components";

export interface IProductCardProps {
    (Props: ProductCardProps): JSX.Element,
    Title:      (Props: ProductTitleProps) => JSX.Element,
    Image:      (Props: ProductImageProps) => JSX.Element,
    Buttons:    (Props: ProductButtonsProps) => JSX.Element,
}