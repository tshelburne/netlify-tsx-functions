export interface Email {
    to: string
    subject: string
    text: string
    html?: string
}

export function send(email: Email): Promise<boolean> {
    return new Promise((res) => {
        setTimeout(() => res(true), 500)
    })
}