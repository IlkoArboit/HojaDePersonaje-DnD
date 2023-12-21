import { writable } from "svelte/store";
import type { character } from "../interfaces/general";

// eslint-disable-next-line prefer-const
let personaje: character = {
    armorClass: 0,
    attributes: [],
    background: undefined,
    deathSaves: [],
    exp: 0,
    hitPoints: 0,
    lvl: 0,
    maxHitPoints: 0,
    name: '',
    class: undefined,
    inventory: undefined,
    race: undefined,
    skill: [{ name: "", value: 0 }],
    initiative: 0
};

export const personajePrueba = writable(personaje);