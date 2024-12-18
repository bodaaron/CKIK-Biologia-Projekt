export type RegistrationData = {
    nev: string,
    email: string,
    jelszo: string,
    osztaly: string
}

export type RegistrationResponse = {
    token: string
}

export type SetPasswordResponse = {
    status: string,
    data: []
}

export type SetPasswordData = {
    password: string,
    password_confirmation: string,
}


export type LoginParam = {
    email: string,
    jelszo: string
}

export type ForgottenPasswordParam = {
    email: string,
}


export type ForgottenSetPasswordParam = {
    password: string,
    password_confirmation: string,
}
