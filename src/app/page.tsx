import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href='/users' className='block'>Go to users</Link>
            <Link href='/posts' className='block'>Go to posts</Link>
            <Link href='/comments' className='block'>Go to comments</Link>
        </>
    );
}
