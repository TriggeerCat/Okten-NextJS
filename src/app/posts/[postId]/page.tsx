import {FC} from "react";
import {fetchData} from "@/app/(utils)/fetchData";
import {Post} from "@/app/(types)/Post";

type PropsType = {
    params: Promise<{ postId: string }>
}

const PostPage: FC<PropsType> = async ({params}) => {
    const {postId} = await params;
    const postData = await fetchData<Post>('https://jsonplaceholder.typicode.com/posts/' + postId);

    return (
        <>
            <h1 className='text-xl'>{postData.title}</h1>
            <div>Id: {postData.id}. {postData.body}</div>
        </>
    )
}

export default PostPage;