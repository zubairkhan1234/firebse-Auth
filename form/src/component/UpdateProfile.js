

import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const history = useHistory()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, seterror] = useState()
    const [Loading, setLoading] = useState(false)

    function handleSumit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return seterror("Password do not match")
        }

        const promises = []
        setLoading(true)
        seterror('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history('/')
        }).catch(() =>{ 
            seterror("Field to Update Account")
        })
        .finally(() => {
            setLoading(false)
        })


    }
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <Form onSubmit={handleSumit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="leave balank to keep tha same" />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}  />
                        </Form.Group>
                        <Button disabled={Loading} className="w-100 text-center" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="text-center w-100 mt-2">
                <Link to="/">Cancle</Link>
            </div>
        </>
    )
}
