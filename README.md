# DD-product-Cart

Este es un paquete de prueba de Despliegue en NPM


### Example

```
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
```

```
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
```