export type Profile = {
    id: number,
    nev: string,
    email: string,
    osztaly: string,
}

export type ChangeData = {
    id: number,
    nev: string,
    email: string,
    osztaly: string
}

export type ChangeResponse = {
    token: string,
}