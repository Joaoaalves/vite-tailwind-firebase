import React, { useRef, useState } from "react"
import { useAuth } from "../hooks"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch (error) {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="email" ref={emailRef} required />
            <input type="password" ref={passwordRef} required />
            <input type="password" ref={passwordConfirmRef} required />
            <button type="submit" disabled={loading}>Sign Up</button>
        </form>
    )
}