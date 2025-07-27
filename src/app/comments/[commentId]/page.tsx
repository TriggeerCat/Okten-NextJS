import {FC} from "react";
import {fetchData} from "@/app/(utils)/fetchData";
import {JSPHComment} from "@/app/(types)/Comment";

type PropsType = {
    params: Promise<{ commentId: string }>
}

const CommentPage: FC<PropsType> = async ({params}) => {

    const {commentId} = await params;
    const commentData = await fetchData<JSPHComment>('https://jsonplaceholder.typicode.com/comments/' + commentId);

    return (
        <>
            <h1 className='text-xl'>{commentData.name}</h1>
            <div>Id: {commentData.id}. {commentData.email}. {commentData.body}</div>
        </>
    )
}

export default CommentPage;