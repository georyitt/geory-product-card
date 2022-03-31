import {useEffect, useRef, useState} from "react";
import {IProduct, IOnChangeArgs, IInitialValues} from "../interfaces";

interface IUseProductProps {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValues;
}

export const useProduct = ({value = 0,onChange, product, initialValues}: IUseProductProps) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 )
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value )
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        increaseBy,
        reset
    }
}