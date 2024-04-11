import { useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import { initialContent } from "../RichEditor/ExampleContent";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { Editor } from "../RichEditor/Editor";

export const PostEditForm = () => {

    const [description, setDescription] = useState<string>(initialContent)
    const [image, setImage] = useState<File | null>(null)

    const { isError, isLoading, selected_post_edit } = useBlog()

    const initialValues: PostEditForm = {
        id: selected_post_edit.id,
        title: selected_post_edit.title,
        description: '',
        image: undefined
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title Required'),
    });


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files
        if (files) {
            const image = files[0]
            setImage(image)
        }
    }

    const handleSubmit = (formData: PostEditForm) => {

        if (description) {
            formData.description = description
        }

        if (image) {
            formData.image = image
        }

    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col min-w-52 text-3xl"}>
                <h3 className={"flex text-5xl justify-center mb-6 font-bold text-purple-900 p-2"}>
                    {"Edit Post"}
                </h3>
                <div className={"flex flex-col"}>
                    <label htmlFor={"title"}>{"Title"}</label>
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
                    <label htmlFor={"image"}>{"Image"}</label>
                    <input
                        id={"image"}
                        name={"image"}
                        type={"file"}
                        onChange={handleImageChange}
                        className={"mt-3 mb-3"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"description"}>{"Description"}</label>
                    <Editor
                        initialContent={selected_post_edit.description}
                        setDescription={setDescription}
                    />
                </div>
                <button
                    type={"submit"}
                    disabled={isLoading}
                    className={"bg-purple-900 text-white p-2 rounded-lg hover:p-3"}
                >
                    {"Edit"}
                </button>
                {isLoading && <h3 className={"text-purple-600"}>{"Loading..."}</h3>}
                {isError && <h3 className={"text-purple-950"}>{"Not edited"}</h3>}
            </Form>
        </Formik>
    );
}