import { Handler } from '@netlify/functions'
import welcomeEmail from '../emails/text'

interface User {
    firstName: string
    lastName: string
    email: string
}

export const handler: Handler = async (evt) => {
    const user = await new Promise<User>((res) => {
        setTimeout(() => res({
            firstName: 'Bob',
            lastName: 'Smith',
            email: 'bob.smith@test.com',
        }), 500)
    })

    await send(welcomeEmail(user))

    return {
        statusCode: 200,
    }
}

interface Email {
    to: string
    subject: string
    text: string
    html?: string
}

function send(email: Email): Promise<boolean> {
    return new Promise((res) => {
        setTimeout(() => res(true), 500)
    })
}