interface User {
    id: number,
    email: string,
}

interface Auth {
    refresh: string,
    access: string,
    user: User
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