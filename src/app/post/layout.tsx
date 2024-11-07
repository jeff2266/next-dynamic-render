'use client'

import dynamic from 'next/dynamic'

// Dynamic import of Protected component. { ssr: false } means it will be dynamically rendered, so client only JS will 
// not run during route build
// (https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
const Protected = dynamic(() => import('@/components/protected'), { ssr: false })

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <Protected>{children}</Protected>     
}
