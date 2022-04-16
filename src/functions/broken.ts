import { Handler } from '@netlify/functions'
import htmlEmail from '../emails/html'
import * as db from '../lib/db'
import * as mail from '../lib/email'

export const handler: Handler = async () => {
    const user = await db.getUser()

    const email = htmlEmail(user)
    await mail.send(email)

    return {
        statusCode: 200,
        body: JSON.stringify({user, email}),
    }
}