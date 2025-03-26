export type Profile = {
  id: number
  nev: string
  email: string
  osztaly: string
  jogosultsag: number
}

export type ChangeData = {
  id: number
  nev: string
  email: string
  osztaly: string
}

export type Kep = {
  id: number
  nev: string
  fajlnev: number
  vanAdat: number
}

export type User = {
  id: number
  nev: string
  email: string
  osztaly: string
  jogosultsag: number
}

export type JelszoValtoztato = {
  email: string
  jelszo: string
}
