export type RegistrationData = {
    nev: string,
    email: string,
    jelszo: string,
    jelszoMeg: string,
    osztaly: string
}

export type RegistrationResponse = {
    token: string
}

export type LoginParam = {
    email: string,
    jelszo: string
}