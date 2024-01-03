import { writable } from "svelte/store";
import type { character } from "../interfaces/general";
import { getModifier } from "../helpers/helpers";

// eslint-disable-next-line prefer-const
let personaje: character = {
	armorClass: 0,
	attributes: [
		{
			name: 'Strength',
			value: 10,
			modifier: getModifier(10),
			savingThrow: false,
			skills: [{
				name: "Athletism",
				value: getModifier(10),
				proficiency: false,
			},]
		},
		{
			name: 'Dexterity',
			value: 13,
			modifier: getModifier(13),
			savingThrow: false,
			skills: [{
				name: "Acrobatics",
				value: getModifier(13),
				proficiency: false,
			}, {
				name: "Sleight of Hand",
				value: getModifier(13),
				proficiency: false,
			}, {
				name: "Stealth",
				value: getModifier(13),
				proficiency: false,
			},]
		},
		{
			name: 'Constitution',
			value: 19,
			modifier: getModifier(19),
			savingThrow: false,
			skills: []
		},
		{
			name: 'Intelligence',
			value: 8,
			modifier: getModifier(8),
			savingThrow: true,
			skills: [{
				name: "Arcana",
				value: getModifier(8),
				proficiency: false,
			}, {
				name: "History",
				value: getModifier(8),
				proficiency: false,
			}, {
				name: "Investigation",
				value: getModifier(8),
				proficiency: false,
			}, {
				name: "Nature",
				value: getModifier(8),
				proficiency: false,
			}, {
				name: "Religion",
				value: getModifier(8),
				proficiency: false,
			},]
		},
		{
			name: 'Wisdom',
			value: 12,
			modifier: getModifier(12),
			savingThrow: true,
			skills: [{
				name: "Animal Handling",
				value: getModifier(12),
				proficiency: false,
			}, {
				name: "Insight",
				value: getModifier(12),
				proficiency: false,
			}, {
				name: "Medicine",
				value: getModifier(12),
				proficiency: false,
			}, {
				name: "Perception",
				value: getModifier(12),
				proficiency: false,
			}, {
				name: "Survival",
				value: getModifier(12),
				proficiency: false,
			},]
		},
		{
			name: 'Charisma',
			value: 15,
			modifier: getModifier(15),
			savingThrow: false,
			skills: [{
				name: "Deception",
				value: getModifier(15),
				proficiency: false,
			}, {
				name: "Intimidation",
				value: getModifier(15),
				proficiency: false,
			}, {
				name: "Performance",
				value: getModifier(15),
				proficiency: false,
			}, {
				name: "Persuasion",
				value: getModifier(15),
				proficiency: false,
			},]
		}
	],
	background: undefined,
	deathSaves: { success: [false, false, false], failures: [false, false, false] },
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
	inventory: {
		weapons: [{
			type: "Martial",
			name: "Longsword",
			cost: "15 gp",
			damage: {
				dice: [1, 8],
				dmgType: "slashing",
			},
			weight: 3,
			properties: {
				name: "Versatile",
				desciption: "Can be used with one or two hands.",
			},
			range: "5ft.",
			description: "A versatile and reliable longsword.",
		},{
			type: "Ranged",
			name: "Crossbow",
			range: "30/60ft",
			cost: "50 gp",
			damage: {
				dice: [1, 10],
				dmgType: "piercing",
			},
			weight: 8,
			properties: {
				name: "Loading",
				desciption: "Must be reloaded after each shot.",
			},
			description: "A heavy crossbow with substantial piercing power.",
		},{
			type: "Melee",
			name: "Warhammer",
			range: '5ft',
			cost: "15 gp",
			damage: {
				dice: [1, 8],
				dmgType: "bludgeoning",
			},
			weight: 5,
			properties: {
				name: "Versatile",
				desciption: "Can be used with one or two hands.",
			},
			description: "A powerful warhammer for crushing blows.",
		}],
		armor: [{
			type: "Medium",
			name: "Chainmail",
			cost: 75,
			armorClass: 16,
			maxDexMod: 2,
			reqStrength: 13,
			stealthDis: true,
			wight: 55,
			description: "A suit of interlocking metal rings, providing good protection.",
		}],
		gear: [{
			name: "Backpack",
			cost: 2,
			wight: 5,
			description: "A sturdy backpack for carrying various items and supplies.",
		}]
	},
	initiative: 0,
	speed: 0,
};

export const personajePrueba = writable(personaje);