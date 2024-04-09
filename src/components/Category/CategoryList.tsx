import { Field } from "formik"
import { useCategory } from "../../hooks/useCategory"
import { CategoryItem } from "./CategoryItem"

export const CategoryList = () => {
    const { existCategories, categories } = useCategory()
    return (
        <>
            {existCategories && <Field as={"select"} name={"category"}>
                {categories.map(category => {
                    <CategoryItem category={category} />
                })}
            </Field>}
        </>
    )
}