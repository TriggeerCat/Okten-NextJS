import {FC} from "react";
import {fetchData} from "@/app/(utils)/fetchData";
import {User} from "@/app/(types)/User";

type PropsType = {
    params: Promise<{ userId: string }>
}

const UserPage: FC<PropsType> = async ({params}) => {

    const {userId} = await params;
    const userData = await fetchData<User>('https://jsonplaceholder.typicode.com/users/' + userId);

    return (
        <>
            <h1 className='text-xl'>{userData.username}</h1>
            <div>Id: {userData.id}. {userData.name}. {userData.email}</div>
        </>
    )
}

export default UserPage;