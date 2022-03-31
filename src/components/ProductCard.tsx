import styles from "../styles/styles.module.css"
import {useProduct} from "../hooks/useProduct";
import {createContext, CSSProperties} from "react";
import {IProductContextProps, IProduct, IOnChangeArgs, IInitialValues} from "../interfaces";

export const ProductContext = createContext({} as IProductContextProps)
const {Provider} = ProductContext;

export interface IProductCardHandlers {
    count:number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: IProduct;

    increaseBy: (value: number) => void;
    reset: () => void;
}

export interface ProductCardProps {
    product: IProduct;
    value?: number;
    // children?: ReactElement | ReactElement[];
    children: (args: IProductCardHandlers) => JSX.Element;
    classname?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void;
    initialValues?: IInitialValues;
}

export const ProductCard = ({product, children, classname="", style, onChange, value, initialValues }:ProductCardProps) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({
        initialValues,
        onChange,
        product,
        value,
    });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }} >
            <div className={`${styles.productCard} ${classname}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,

                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    );
};

export default ProductCard;