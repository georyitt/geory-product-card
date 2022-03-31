import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../src";
import {IProduct} from "../dist/interfaces";

const product:IProduct = {
    id: '1',
    title: 'Coffee Mug',
    // img: './coffee-mug.png'
}

const App = () => {
  return (
    <div>
        <ProductCard
            key={product.id}
            product={product}
            value={0}
            initialValues={{
                count: 4,
                maxCount: 10,
            }}
        >
            {
                ({
                 }) => (
                    <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons/>
                    </>
                )
            }
        </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
