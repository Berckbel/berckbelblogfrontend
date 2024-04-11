interface User {
    id: number,
    email: string,
}

interface Post {
    id: number,
    title: string,
    description: string,
    image_url: string,
    created_at: string,
}


interface Auth {
    refresh: string,
    access: string,
    user: User
    user_posts: Post[]
}

interface AuthContextType {
    auth: Auth;
    setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

interface Category {
    id: number,
    name: string,
    created_at: string
}

interface Blog {
    posts: Post[],
    categories: Category[],
    selected_category: Category,
    selected_post: Post,
    selected_post_edit: Post,
    comments: PostComment[]
}

interface BlogContextType {
    blog: Blog;
    setBlog: React.Dispatch<React.SetStateAction<Blog>>;
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

interface PostForm {
    title: string,
    description?: string,
    image?: File,
    category_id?: number,
}

interface PostEditForm {
    id: number,
    title: string,
    description?: string,
    image?: File,
}

interface PostComment {
    id: number,
    comment: string,
    created_at: string,
    user: User
}

interface PostCommentForm {
    comment: string,
    post_id: number,
}