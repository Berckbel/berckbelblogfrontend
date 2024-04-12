import { useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import { initialSelectOption } from "../../hepers/CategoryConst";
import { validateFile } from "../../hepers/CustomValidations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { CategoryList } from "../Category/CategoryList";
import { initialContent } from "../RichEditor/ExampleContent";
import { Editor } from "../RichEditor/Editor";
import { Loader } from "../Feedback/Loader";
import { ErrorMessage as ErrorMessageFeed } from "../Feedback/ErrorMessage";

export const PostCreateForm = () => {
    const [description, setDescription] = useState<string>(initialContent)
    const [image, setImage] = useState<File | null>(null)

    const { isError, isLoading, createNewPost } = useBlog()

    const initialValues: PostForm = {
        title: '',
        description: '',
        image: undefined,
        category_id: initialSelectOption.id,
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title Required'),
        category_id: Yup.number().min(1, 'Category Required')
    });


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files
        if (files) {
            const image = files[0]
            setImage(image)
        }
    }

    const handleSubmit = (formData: PostForm) => {
        const isFileError = validateFile(image)

        if (description) {
            formData.description = description
        }

        if (image) {
            formData.image = image
        }

        if (!isFileError) {
            createNewPost({ post: formData })
        }

    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col min-w-52 text-3xl"}>
                <h3 className={"flex text-5xl justify-center mb-6 font-black text-white bg-purple-900 p-2"}>
                    {"Create Post"}
                </h3>
                <div className={"flex flex-col"}>
                    <label htmlFor={"title"} className={"font-bold text-purple-950 mb-2"}>{"Title"}</label>
                    <Field
                        id={"title"}
                        name={"title"}
                        placeholder={"Post title"}
                        className={"mt-3 mb-3"}
                    />
                    <ErrorMessage
                        name={"title"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"category_id"} className={"font-bold text-purple-950 mb-3"}>{"Category"}</label>
                    <CategoryList />
                    <ErrorMessage
                        name={"category_id"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"image"} className={"font-bold text-purple-950 mb-2"}>{"Image"}</label>
                    <input
                        id={"image"}
                        name={"image"}
                        type={"file"}
                        onChange={handleImageChange}
                        className={"mt-3 mb-3"}
                    />
                    <div id={"imageError"} className={"text-red-600 text-xl mb-2"}></div>
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"description"} className={"font-bold text-purple-950 mb-2"}>{"Description"}</label>
                    <Editor
                        initialContent={initialContent}
                        setDescription={setDescription}
                    />
                </div>
                <button
                    type={"submit"}
                    disabled={isLoading}
                    className={"bg-purple-900 text-white p-2 rounded-lg hover:p-3"}
                >
                    {"Create"}
                </button>
                {isLoading && <Loader />}
                {isError && <ErrorMessageFeed />}
            </Form>
        </Formik>
    );
}