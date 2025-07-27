import {fetchData} from "@/app/(utils)/fetchData";
import {User} from "@/app/(types)/User";
import Link from "next/link";


const UsersPage = async () => {
    const usersArray = await fetchData<User[]>('https://jsonplaceholder.typicode.com/users')

    return (
        <ul>
            {usersArray.map((value) => (
                <li key={value.id}>
                    <Link href={'/users/' + value.id}>{value.id}. {value.username}</Link>
                </li>
            ))}
        </ul>
    );
}

export default UsersPage;