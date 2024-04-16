import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../hooks/useUser";
import { Loader } from "../Feedback/Loader";
import { ErrorMessage as ErrorMessageFeed } from "../Feedback/ErrorMessage";

export const RegisterForm = () => {
    const { register, isError, isLoading } = useUser()

    const initialValues: RegisterCredentials = {
        email: '',
        password: '',
        re_password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Too short').required('Required'),
        re_password: Yup.string().min(8, 'Too short').required('Required').oneOf([Yup.ref('password'), ''], 'Passwords must match'),
    });

    const handleSubmit = (formData: RegisterCredentials) => {
        const { email, password, re_password } = formData
        register({ email, password, re_password })
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col min-w-52 text-3xl"}>
                <h3 className={"flex text-5xl justify-center mb-6 font-bold text-purple-900 p-2"}>
                    {"Register"}
                </h3>
                <div className={"flex flex-col"}>
                    <label htmlFor={"email"}>{"Email"}</label>
                    <Field
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"example@gmail.com"}
                        className={"mt-3 mb-3"}
                    />
                    <ErrorMessage
                        name={"email"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"password"}>{"Password"}</label>
                    <Field
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        placeholder={"********"}
                        className={"mt-3 mb-3"}
                    />
                    <ErrorMessage
                        name={"password"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"re_password"}>{"retype password"}</label>
                    <Field
                        type={"password"}
                        id={"re_password"}
                        name={"re_password"}
                        placeholder={"********"}
                        className={"mt-3 mb-3"}
                    />
                    <ErrorMessage
                        name={"re_password"}
                        component={"div"}
                        className={"text-red-600 text-xl mb-2"}
                    />
                </div>
                <button
                    type={"submit"}
                    disabled={isLoading}
                    className={"bg-purple-900 text-white p-2 rounded-lg hover:p-3"}
                >
                    {"Register"}
                </button>
                {isLoading && <Loader />}
                {isError && <ErrorMessageFeed  message={"Not Register"} />}
            </Form>
        </Formik>
    );
}