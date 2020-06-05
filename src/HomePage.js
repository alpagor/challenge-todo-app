import React from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
        <h1>HOME PAGE</h1>
        <Link to="/todos">ToDos Page</Link>
        </div>
    )
}