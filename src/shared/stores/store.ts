import { writable } from "svelte/store";
import type { character } from "../interfaces/general";

// eslint-disable-next-line prefer-const
let personaje: character = {
    armorClass: 0,
    attributes: [],
    background: undefined,
    deathSaves: {success:[false, false, false], failures: [false, false, false]},
    exp: 0,
    hitPoints: 0,
    lvl: 0,
    maxHitPoints: 0,
    name: '',
    class: undefined,
    inventory: undefined,
    race: undefined,
    skill: [{ name: "", value: 0, proficiency: false }],
    initiative: 0,
    speed: 0,
};

export const personajePrueba = writable(personaje);