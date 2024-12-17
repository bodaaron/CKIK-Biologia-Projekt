export type RegistrationData = {
    name: string,
    email: string,
    jelszo: string,
    class: string
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
    password: string
}

export type ForgottenPasswordParam = {
    email: string,
}


export type ForgottenSetPasswordParam = {
    password: string,
    password_confirmation: string,
}
