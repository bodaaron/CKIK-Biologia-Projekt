export type OsztalynakFeleletData = {
    selectedTeszt: string,
    selectedOsztaly: string,
}

export type DiaknakFeleletData = {
    diakId: number,
    tanarId: number,
    kepId: number,
}

export type Felelet = {
    id: number,
    kepId: number,
    tanarId: number,
    kitoltesDatum: Date,
}