import {fetchData} from "@/app/(utils)/fetchData";
import Link from "next/link";
import {JSPHComment} from "@/app/(types)/Comment";


const CommentsPage = async () => {
    const commentsArray = await fetchData<JSPHComment[]>('https://jsonplaceholder.typicode.com/comments')

    return (
        <ul>
            {commentsArray.map((value) => (
                <li key={value.id}>
                    <Link href={'/comments/' + value.id}>{value.id}. {value.name}</Link>
                </li>
            ))}
        </ul>
    );
}

export default CommentsPage;