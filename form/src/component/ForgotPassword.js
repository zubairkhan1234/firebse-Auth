import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, seterror] = useState()
    const [Loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSumit(e) {
        e.preventDefault()

        try {
            setMessage('')
            seterror('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check youe inbox for furhter instruction")
        } catch {
            seterror('Failed to reset password')
        }
        setLoading(false)

    }
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    {message && <Alert variant="danger" >{message}</Alert>}
                    <Form onSubmit={handleSumit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={Loading} className="w-100 text-center" type="submit">Reset Password</Button>
                    </Form>
                    <div className="text-center mt-3 w-100">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                </Card.Body>
            </Card>

            <div className="text-center w-100 mt-2">
                Need an Accoutn? <Link to="/login"> Login </Link>
            </div>
        </>
    )
}
