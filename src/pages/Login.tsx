import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../hooks/useUser';

export const Login = () => {

    const { login, isError, isLoading } = useUser()

    const initialValues: LoginCredentials = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Too short').required('Required'),
    });

    const handleSubmit = (formData: LoginCredentials) => {
        const { email, password } = formData
        console.log({ email, password })
        login({ email, password })
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={"flex flex-col min-w-96 text-3xl"}>
                <h3 className={"flex text-5xl justify-center mb-6 font-bold text-purple-900 p-2"}>
                    {"Login"}
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
                <button
                    type={"submit"}
                    disabled={isLoading}
                    className={"bg-purple-900 text-white p-2 rounded-lg hover:p-3"}
                >
                    {"Login"}
                </button>
                {isLoading&&<h3 className={"text-purple-600"}>{"Loading..."}</h3>}
                {isError&&<h3 className={"text-purple-950"}>{"Not logged in"}</h3>}
            </Form>
        </Formik>
    );
}