import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()
    const { login } = useAuth()
    const [error, seterror] = useState()
    const [Loading, setLoading] = useState(false)


    async function handleSumit(e) {
        e.preventDefault()

        try{
            seterror('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            seterror('Failed to login')
        }
        setLoading(false)

    }
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
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
                        <Button disabled={Loading} className="w-100 text-center" type="submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        
            <div className="text-center w-100 mt-2">
                Need an Accoutn? <Link to="/signup"> Sign Up </Link>
        </div>
        </>
    )
}
