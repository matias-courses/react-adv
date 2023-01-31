import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export interface Props {
    img?: string,
    className?: string,
    style?: CSSProperties,
}

/* Compout component pattern */
export const ProductImage = ({ className, img, style }: Props) => { /* De esta forma le digo a ts que la propiedad puede ser opcional */

    const {product} = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img 
            className={`${styles.productImg} ${className}`}
            style={style} 
            src={imgToShow} 
            alt="Product Image" 
        />
    )
}