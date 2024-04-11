import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup"
import { CategoryList } from "./Category/CategoryList";

export const CategoryFilter = () => {
    const initialValues: { category_id: number } = {
        category_id: 0,
    };

    const validationSchema = Yup.object({
        category_id: Yup.number().min(1, 'Post Required'),
    });

    const handleSubmit = (formData: { category_id: number }) => {
        console.log(formData)
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={""}>
                <div className={""}>
                    <label htmlFor={"category_id"}>{"Category"}</label>
                    <CategoryList />
                    <ErrorMessage
                        name={"category_id"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <button
                    type={"submit"}
                    className={"bg-purple-900 text-white p-2 rounded-lg hover:p-3"}
                >
                    {"Filter"}
                </button>
            </Form>
        </Formik>
    )
}