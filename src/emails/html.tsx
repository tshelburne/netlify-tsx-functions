import React from 'react'
import { renderToString } from 'react-dom/server'

interface User {
    firstName: string
    email: string
}

function welcomeEmail(user: User) {
    return {
        to: user.email,
        subject: 'Welcome to the app',
        text: `Hello ${user.firstName}, welcome to the app!`,
        html: renderToString(<Welcome {...user} />)
    }
}

export default welcomeEmail

function Welcome({ firstName }: User) {
    return <div>
        <p>Hello {firstName},</p>
        <p>Welcome to the site!</p>
    </div>
}