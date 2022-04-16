interface User {
    firstName: string
    email: string
}

function welcomeEmail(user: User) {
    return {
        to: user.email,
        subject: 'Welcome to the app',
        text: `Hello ${user.firstName}, welcome to the app!`,
    }
}

export default welcomeEmail