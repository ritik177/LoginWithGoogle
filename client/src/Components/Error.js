import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container" style={{ textAlign: "center" }}>
                <div >
                    <h1>Error</h1>
                </div>
                <button onClick={() => navigate("/")}>
                    <h1>Back To Home</h1>
                </button>
            </div>
        </>
    )
}

export default Error
