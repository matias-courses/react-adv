import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";

export interface Props {
    className?: string,
    title?: string,
    style?: CSSProperties,
}

export const ProductTitle = ({ title, className, style }: Props) => { /* De esta forma le digo a ts que la propiedad es obligatoria, siempre tendra un valor*/

    const {product} = useContext(ProductContext)

    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    )
}
