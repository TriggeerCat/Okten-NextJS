import {fetchData} from "@/app/(utils)/fetchData";
import Link from "next/link";
import {Post} from "@/app/(types)/Post";


const PostsPage = async () => {
    const postsArray = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts')

    return (
        <ul>
            {postsArray.map((value) => (
                <li key={value.id}>
                    <Link href={'/posts/' + value.id}>{value.id}. {value.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default PostsPage;