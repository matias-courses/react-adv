import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

/* Compout component pattern */
export const ProductImage = ({ img = '' }) => { /* De esta forma le digo a ts que la propiedad puede ser opcional */

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
        <img className={styles.productImg} src={imgToShow} alt="Product Image" />
    )
}