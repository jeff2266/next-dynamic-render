'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Protected({ children }: Readonly<{ children: React.ReactNode }>) {

    // Client only JS to get session information
    const session = document.cookie.match('session')?.pop()

    const router = useRouter()
    
    useEffect(() => {
        console.log('Effect...')
        if (!session)
            router.push('/')
    }, [session])

    console.log(session)
    console.log(children)

    return (!!session && <>{children}</>)
}
