import { ProductPhotos } from "../../components/ProductPhotos/ProductPhotos";
import { ProductSummary } from "../../components/ProductSummary/ProductSummary";

function ProductDetails() {
    return (
        <>
            <ProductPhotos />
            <ProductSummary
                product={{
                    brand: "SunTzu",
                    name: "Biały Sweter",
                    price: "199pln",
                }}
            />
        </>
    );
}

export { ProductDetails };