import { writable } from 'svelte/store';
import type { character } from '../interfaces/general';
import { getModifier } from '../helpers/helpers';

// eslint-disable-next-line prefer-const
let personaje: character = {
	armorClass: 0,
	attributes: [
		{
			name: 'Strength',
			value: 10,
			modifier: getModifier(10),
			savingThrow: false,
			skills: [
				{
					name: 'Athletism',
					value: getModifier(10),
					proficiency: false
				}
			]
		},
		{
			name: 'Dexterity',
			value: 13,
			modifier: getModifier(13),
			savingThrow: false,
			skills: [
				{
					name: 'Acrobatics',
					value: getModifier(13),
					proficiency: false
				},
				{
					name: 'Sleight of Hand',
					value: getModifier(13),
					proficiency: false
				},
				{
					name: 'Stealth',
					value: getModifier(13),
					proficiency: false
				}
			]
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
			skills: [
				{
					name: 'Arcana',
					value: getModifier(8),
					proficiency: false
				},
				{
					name: 'History',
					value: getModifier(8),
					proficiency: false
				},
				{
					name: 'Investigation',
					value: getModifier(8),
					proficiency: false
				},
				{
					name: 'Nature',
					value: getModifier(8),
					proficiency: false
				},
				{
					name: 'Religion',
					value: getModifier(8),
					proficiency: false
				}
			]
		},
		{
			name: 'Wisdom',
			value: 12,
			modifier: getModifier(12),
			savingThrow: true,
			skills: [
				{
					name: 'Animal Handling',
					value: getModifier(12),
					proficiency: false
				},
				{
					name: 'Insight',
					value: getModifier(12),
					proficiency: false
				},
				{
					name: 'Medicine',
					value: getModifier(12),
					proficiency: false
				},
				{
					name: 'Perception',
					value: getModifier(12),
					proficiency: false
				},
				{
					name: 'Survival',
					value: getModifier(12),
					proficiency: false
				}
			]
		},
		{
			name: 'Charisma',
			value: 15,
			modifier: getModifier(15),
			savingThrow: false,
			skills: [
				{
					name: 'Deception',
					value: getModifier(15),
					proficiency: false
				},
				{
					name: 'Intimidation',
					value: getModifier(15),
					proficiency: false
				},
				{
					name: 'Performance',
					value: getModifier(15),
					proficiency: false
				},
				{
					name: 'Persuasion',
					value: getModifier(15),
					proficiency: false
				}
			]
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
		weapons: [
			{
				type: "Simple",
				name: "Dagger",
				cost: "2 gp",
				damage: {
					dice: [1, 4],
					dmgType: "piercing",
				},
				weight: 1,
				properties: {
					name: "Finesse, Light, Thrown",
					desciption: "Can be used with Dexterity for attack and damage, light and throwable.",
				},
				range: '5ft 30/60ft',
				description: "A short, pointed blade suitable for stabbing.",
			},{
				type: 'Martial',
				name: 'Longsword',
				cost: '15 gp',
				damage: {
					dice: [1, 8],
					dmgType: 'slashing'
				},
				weight: 3,
				properties: {
					name: 'Versatile',
					desciption: 'Can be used with one or two hands.'
				},
				range: '5ft.',
				description: 'A versatile and reliable longsword.'
			},
			{
				type: 'Ranged',
				name: 'Crossbow',
				range: '30/60ft',
				cost: '50 gp',
				damage: {
					dice: [1, 10],
					dmgType: 'piercing'
				},
				weight: 8,
				properties: {
					name: 'Loading',
					desciption: 'Must be reloaded after each shot.'
				},
				description: 'A heavy crossbow with substantial piercing power.'
			},
			{
				type: 'Martial',
				name: 'Warhammer',
				range: '5ft',
				cost: '15 gp',
				damage: {
					dice: [1, 8],
					dmgType: 'bludgeoning'
				},
				weight: 5,
				properties: {
					name: 'Versatile',
					desciption: 'Can be used with one or two hands.'
				},
				description: 'A powerful warhammer for crushing blows.'
			}
		],
		armor: [
			{
				type: 'Medium',
				name: 'Chainmail',
				cost: 75,
				armorClass: 16,
				maxDexMod: 2,
				reqStrength: 13,
				stealthDis: true,
				wight: 55,
				description: 'A suit of interlocking metal rings, providing good protection.'
			},
			{
				type: 'Light',
				name: 'Leather Armor',
				cost: 10,
				armorClass: 11,
				maxDexMod: 2,
				reqStrength: false,
				stealthDis: false,
				wight: 10,
				description: 'Flexible and lightweight leather armor for basic protection.'
			},
			{
				type: 'Heavy',
				name: 'Plate Armor',
				cost: 1500,
				armorClass: 18,
				maxDexMod: false,
				reqStrength: 15,
				stealthDis: true,
				wight: 65,
				description: 'Full plate armor, providing excellent protection but limiting mobility.'
			},
			{
				type: 'Medium',
				name: 'Scale Mail',
				cost: 50,
				armorClass: 14,
				maxDexMod: 2,
				reqStrength: false,
				stealthDis: true,
				wight: 45,
				description:
					'Armor made of small overlapping metal scales for a balance of protection and mobility.'
			}
		],
		gear: [
			{
				name: 'Backpack',
				cost: 2,
				wight: 5,
				description: 'A sturdy backpack for carrying various items and supplies.'
			},
			{
				name: 'Rope',
				cost: 1,
				wight: 10,
				description: 'A 50-foot coil of strong hemp rope, useful for climbing or securing items.'
			},
			{
				name: 'Healing Potion',
				cost: 50,
				wight: 0.5,
				description:
					'A small vial containing a healing elixir. Restores a moderate amount of health when consumed.'
			},
			{
				name: 'Lockpicking Kit',
				cost: 25,
				wight: 2,
				description:
					'A set of tools used for picking locks. Essential for skilled rogues and adventurers.'
			},
			{
				name: 'Torch',
				cost: 0.1,
				wight: 1,
				description:
					'A simple torch that provides light for a limited duration. Essential for exploring dark places.'
			},
			{
				name: 'Cooking Pot',
				cost: 5,
				wight: 4,
				description: 'A sturdy metal pot for cooking meals during your travels.'
			}
		]
	},
	initiative: 0,
	speed: 0
};

export const personajePrueba = writable(personaje);
