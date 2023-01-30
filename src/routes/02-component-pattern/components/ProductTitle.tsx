import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => { /* De esta forma le digo a ts que la propiedad es obligatoria, siempre tendra un valor*/

    const {product} = useContext(ProductContext)

    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}
