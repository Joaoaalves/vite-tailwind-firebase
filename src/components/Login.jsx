import React, { useRef, useState } from "react"
import { useAuth } from "../hooks"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="email" ref={emailRef} required />
            <input type="password" ref={passwordRef} required />
            <button type="submit">Log In</button>
        </form>
    )
}