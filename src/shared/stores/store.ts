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
    name: 'Personaje Prueba',
    race: {
		name: 'Elf',
		summary: 'A race of elves...',
		traits: ['Darkvision', 'Keen Senses'],
		abilityIncrease: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 0 },
		size: 'Medium',
		speed: 30,
		languages: ['Common', 'Elvish'],
		subRace: {
			name: 'High Elf',
			summary: 'A subrace of elves with...',
			traits: ['Elf Weapon Training', 'Cantrip'],
			abilityIncrease: { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
			size: 'Medium',
			speed: 30,
			languages: ['Common', 'Elvish']
		}
	},
	charClass: {
		name: 'Wizard',
		lvl: 1,
		hitDie: 6,
		initialHp: 6,
		saveThr: ['Intelligence', 'Wisdom'],
		weaponPoff: ['Dagger'],
		armorProff: [],
		toolsProff: ['Spellbook'],
		resource: ['Spell Slots'],
		initialEquip: ['Spellbook', 'Arcane Focus'],
		traits: ['Spellcasting', 'Arcane Recovery'],
		profBonus: 2,
		classSkills: ['Arcana', 'History'],
		subClass: {
			name: 'School of Evocation',
			features: ['Evocation Savant', 'Sculpt Spells']
		}
	},
    inventory: undefined,
    initiative: 0,
    speed: 0,
};

export const personajePrueba = writable(personaje);