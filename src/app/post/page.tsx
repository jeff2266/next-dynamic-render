import Link from "next/link";

export default function Page() {
    return <div className="grid place-items-center min-h-screen p-8 pb-20">
        <span>Create a new post!</span>
        <Link href='/'>Home</Link>
    </div>
}