import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useBlog } from '../hooks/useBlog';
import { Editor } from '../components/RichEditor/Editor';
import { initialContent } from '../components/RichEditor/ExampleContent';
import React, { useState } from 'react';
import { validateFile } from '../hepers/CustomValidations';

export const PostCreate = () => {

    const [description, setDescription] = useState<string>(initialContent)
    const [image, setImage] = useState<File | null>(null)

    const { isError, isLoading } = useBlog()

    const initialValues: PostForm = {
        title: '',
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

    const handleSubmit = (formData: PostForm) => {
        const isFileError = validateFile(image)

        if (description) {
            formData.description = description
        }

        if (image) {
            formData.image = image
        }

        if (!isFileError) {
            console.log(formData)
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
                    {"Create Post"}
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
                    <div id={"imageError"} className={"text-red-600 text-xl mb-2"}></div>
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"description"}>{"Description"}</label>
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
                {isLoading && <h3 className={"text-purple-600"}>{"Loading..."}</h3>}
                {isError && <h3 className={"text-purple-950"}>{"Not created"}</h3>}
            </Form>
        </Formik>
    );
}