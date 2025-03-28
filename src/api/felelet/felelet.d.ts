export type OsztalynakFeleletData = {
    selectedTeszt: number,
    selectedOsztaly: string,
    feleletMod: boolean,
}

export type DiaknakFeleletData = {
    diakId: number,
    tanarId: number,
    kepId: number,
    feleletMod: boolean,
}

export type Felelet = {
    id: number,
    kepId: number,
    tanarId: number,
    diakId: number,
    kitoltesDatum: Date,
    feleletMod: boolean,
}

export type Valasz = {
    feleletId: number,
    valasz: string
}

export type Valaszok = {
    id: number,
    valasz: string,
    elfogadotte: boolean,
}