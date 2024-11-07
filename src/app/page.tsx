import SignIn from "@/components/signIn"
import Link from "next/link"

export default function Home() {
    return (
        <div className="grid place-items-center min-h-screen p-8 pb-20">
            <SignIn />
            <Link href='/post'>New Post</Link>
        </div>
    )
}
