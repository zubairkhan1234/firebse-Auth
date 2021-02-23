import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const history = useHistory()
    const { signup } = useAuth()
    const [error, seterror] = useState()
    const [Loading, setLoading] = useState(false)

    async function handleSumit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return seterror("Password do not match")
        }

        try{
            seterror('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        }catch{
            seterror('Faild to create an account')
        }
        setLoading(false)

    }
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Signup</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <Form onSubmit={handleSumit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={Loading} className="w-100 text-center" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="text-center w-100 mt-2">
                Already have an accoutn? <Link to="/login">Log In</Link>
        </div>
        </>
    )
}
