import { Field } from "formik"
import { useCategory } from "../../hooks/useCategory"
import { CategoryItem } from "./CategoryItem"
import { initialSelectOption } from "./CategoryConst"

export const CategoryList = () => {
    const { existCategories, categories } = useCategory()
    return (
        <>
            {existCategories && <Field
                as={"select"}
                id={"category_id"}
                name={"category_id"}
            >
                <CategoryItem category={initialSelectOption} />
                {categories.map(category => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </Field>}
        </>
    )
}