import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {

    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser, logOut } = useAuth()
    async function handleLogout() {

        try {
            await logOut()
            history.push("/login")
        } catch {
            return setError("failed to logOut")
        }
    }
    return (
        <>
            <Card className="w-100 text-center mt-2">
                <Card.Body>
                    <h2 className="mt-4 text-center" >Profile</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <strong>Email :</strong> {currentUser.email}
                    {/* <strong>Email :</strong> {currentUser && currentUser.email} */}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
