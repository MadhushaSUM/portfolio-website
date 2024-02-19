import { Post } from "@/app/types";

const Posts: Post[]= [
    {
        id: 0,
        imageURL: '/JavaScript-image.jpg',
        header: 'JavaScript',
        content: 'JavaScript is a versatile and dynamic programming language primarily used for web development. Initially created to add interactivity to web pages, it has evolved into a full-fledged language capable of building complex web applications, server-side applications, and even mobile applications. '           
    },
    {
        id: 1,
        imageURL: '/nextjs.png',
        header: 'Next.js SEO',
        content:'Next.js provides built-in support for server-side rendering (SSR) and static site generation (SSG), which can significantly improve SEO performance by ensuring that search engines can crawl and index your website content efficiently'
    },
    {
        id: 2,
        imageURL: '/unreal-engine-5.jpg',
        header: 'Unreal Engine 5',
        content: 'Unreal Engine 5 represents a significant leap forward in game development technology, offering groundbreaking features like Nanite, which allows for the rendering of massive amounts of geometric detail with minimal performance impact.'          
    },
]

export default Posts;