import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup"
import { CategoryList } from "../Category/CategoryList";
import { initialSelectOption } from "../../hepers/CategoryConst";
import { useCategory } from "../../hooks/useCategory";

export const CategoryFilter = () => {

    const { existSelectedCategory, selected_category, categories, selectCategory } = useCategory()

    const initialValues: { category_id: number } = {
        category_id: existSelectedCategory ? selected_category.id : initialSelectOption.id,
    };

    const validationSchema = Yup.object({
        //category_id: Yup.number().min(1, 'Post Required'),
    });

    const handleSubmit = (formData: { category_id: number }) => {
        const { category_id } = formData

        const findedCategory = categories.find(category => category.id == category_id)
        const selectedCategory = findedCategory ? findedCategory : initialSelectOption

        selectCategory({ category: selectedCategory })
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col mb-2 self-end"}>
                <div className={"flex flex-rwo"}>
                    <label htmlFor={"category_id"} className={"text-purple-950 font-black"}>{"Category:"}</label>
                    <CategoryList />
                    <button
                        type={"submit"}
                        className={"px-2 bg-purple-900 text-white rounded-lg"}
                    >
                        {"Filter"}
                    </button>
                </div>
                <ErrorMessage
                    name={"category_id"}
                    component={"span"}
                    className={"text-red-600"}
                />
            </Form>
        </Formik>
    )
}