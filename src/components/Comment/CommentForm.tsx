import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useBlog } from '../../hooks/useBlog';
import { useComment } from '../../hooks/useComment';

export const CommentForm = () => {

    const { selected_post } = useBlog()
    const { isError, isLoading, createNewComment } = useComment()

    const initialValues: PostCommentForm = {
        comment: '',
        post_id: selected_post.id
    };

    const validationSchema = Yup.object({
        comment: Yup.string().required("Comment is required"),
        post_id: Yup.number().min(1, 'Post Required'),
    });

    const handleSubmit = (formData: PostCommentForm, { resetForm }: FormikHelpers<PostCommentForm>) => {
        createNewComment({ newComment: formData });
        resetForm({ values: { ...initialValues, comment: '' } });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"p-2 m-2"}>
                <h3 className={"mb-2 font-bold text-purple-950"}>
                    {"Create Comment"}
                </h3>
                <div className={"flex flex-col"}>
                    <Field
                        type={"text"}
                        id={"comment"}
                        name={"comment"}
                        component={"textarea"}
                        placeholder={"pretty good :)"}
                    />
                    <ErrorMessage
                        name={"comment"}
                        component={"div"}
                        className={"text-red-600 mb-2"}
                    />
                </div>
                <button
                    type={"submit"}
                    disabled={false}
                    className={"mt-2 p-2 font-bold text-white bg-purple-950 rounded-md"}
                >
                    {"Create"}
                </button>
                {isLoading && <h3 className={"text-purple-600"}>{"Loading..."}</h3>}
                {isError && <h3 className={"text-purple-950"}>{"Not created"}</h3>}
            </Form>
        </Formik>
    );
}