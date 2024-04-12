import { Field } from "formik"
import { useGetCategories } from "../../hooks/useGetCategories"
import { CategoryItem } from "./CategoryItem"
import { initialSelectOption } from "../../hepers/CategoryConst"
import { ErrorMessage } from "../Feedback/ErrorMessage"
import { Loader } from "../Feedback/Loader"
import { EmptyMesage } from "../Feedback/EmptyMessage"

export const CategoryList = () => {
    const { existCategories, isLoading, isError, categories } = useGetCategories()
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
            {!existCategories && <EmptyMesage />}
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
        </>
    )
}