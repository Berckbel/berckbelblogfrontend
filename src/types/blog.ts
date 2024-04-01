interface User {
    id: number,
    email: string,
}

interface Auth {
    refresh: string,
    access: string,
    user: User
}

interface AuthContextType {
    auth: Auth;
    setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}


interface Post {
    id: number,
    title: string,
    description: string,
    image_url: string,
    created_at: string,
}

interface Blog {
    posts: Post[],
}

interface LoginCredentials {
    email: string,
    password: string,
}

interface LoginTokens {
    refresh: string,
    access: string,
}

interface RegisterCredentials {
    email: string,
    password: string,
    re_password: string,
}
