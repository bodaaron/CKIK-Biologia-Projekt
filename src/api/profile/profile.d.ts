export type Profile = {
  id: number
  nev: string
  email: string
  osztaly: string
}

export type ChangeData = {
  id: number
  nev: string
  email: string
  osztaly: string
}

export type ChangeResponse = {
  token: string
}

export type Kep = {
  id: number
  nev: string
  fajlnev: number
}

export type User = {
  id: number
  nev: string
  email: string
  osztaly: string
  jogosultsag: number
}
