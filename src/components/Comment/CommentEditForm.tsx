import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useBlog } from '../../hooks/useBlog';
import { useComment } from '../../hooks/useComment';
import { Loader } from '../Feedback/Loader';
import { ErrorMessage as ErrorMessageFeed } from '../Feedback/ErrorMessage';

export const CommentEditForm = ({ comment }: { comment: PostComment }) => {

    const { selected_post } = useBlog()
    const { isError, isLoading, editComment, deleteOwnedComment } = useComment()

    const initialValues: PostCommentEditForm = {
        comment: comment.comment,
        post_id: selected_post.id,
        comment_id: comment.id,
    };

    const validationSchema = Yup.object({
        comment: Yup.string().required("Comment is required"),
        post_id: Yup.number().min(1, 'Post Required'),
        comment_id: Yup.number().min(1, 'Comment Required'),
    });

    const handleSubmit = (formData: PostCommentEditForm) => {
        editComment({ comment: formData })
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col p-2 m-2 border-2 border-red-900"}>
                <h4 className={"font-extrabold"}>{comment.user.email}</h4>
                <Field
                    type={"text"}
                    id={"comment"}
                    name={"comment"}
                    component={"textarea"}
                />
                <ErrorMessage
                    name={"comment"}
                    component={"div"}
                    className={"text-red-600 mb-2"}
                />
                <span className={"font-semibold"}>{comment.created_at}</span>
                <section className={"p-1 my-1"}>
                    <button
                        type={"submit"}
                        className={"min-w-16 max-w-16 p-1 mr-2 bg-purple-950 text-white font-black"}
                    >
                        {"Edit"}
                    </button>
                    <button
                        type={"button"}
                        onClick={() => deleteOwnedComment({ commentToDelete: comment })} 
                        className={"min-w-16 max-w-16 p-1 mr-2 bg-red-700 text-white font-black"}
                    >
                        {"Delete"}
                    </button>
                </section>
                {isLoading && <Loader />}
                {isError && <ErrorMessageFeed />}
            </Form>
        </Formik>
    );
}