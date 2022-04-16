import { Handler } from '@netlify/functions'
import textEmail from '../emails/text'
import * as db from '../lib/db'
import * as mail from '../lib/email'

export const handler: Handler = async () => {
    const user = await db.getUser()

    const email = textEmail(user)
    await mail.send(email)

    return {
        statusCode: 200,
        body: JSON.stringify({user, email}),
    }
}