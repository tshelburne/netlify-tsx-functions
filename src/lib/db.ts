export interface User {
    firstName: string
    lastName: string
    email: string
}

export function getUser(): Promise<User> {
    return new Promise<User>((res) => {
        setTimeout(() => res({
            firstName: 'Bob',
            lastName: 'Smith',
            email: 'bob.smith@test.com',
        }), 500)
    })
}