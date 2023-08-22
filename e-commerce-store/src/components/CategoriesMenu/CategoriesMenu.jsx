import { NavLink, useParams } from "react-router-dom";
import styles from "./CategoriesMenu.module.css";
import { CATEGORIES } from "../../constants/productCategories";

function CategoriesMenu() {
    const params = useParams();
    const foundCategory = CATEGORIES.find((c) => c.path === params.category);

    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>
                <ul className={styles.menuContent}>
                    {CATEGORIES.map(({ path, categoryName }) => (
                        <li key={path}>
                            <NavLink
                                className={styles.menuItem}
                                to={`/${params.gender}/${path}`}
                                relative="path"
                            >
                                {categoryName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { CategoriesMenu };