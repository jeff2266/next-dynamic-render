'use client'

export default function SignIn() {
    return (
        <button onClick={() => document.cookie = 'session'}>sign in</button>
    )
}
