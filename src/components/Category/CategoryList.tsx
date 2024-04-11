import { Field } from "formik"
import { useGetCategories } from "../../hooks/useGetCategories"
import { CategoryItem } from "./CategoryItem"
import { initialSelectOption } from "../../hepers/CategoryConst"

export const CategoryList = () => {
    const { existCategories, categories } = useGetCategories()
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