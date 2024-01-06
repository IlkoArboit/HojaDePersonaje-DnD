import type { charClass } from '../interfaces/general';

export const barbarian: charClass = {
	hitDie: 12,
	initialHp: 12,
	lvl: 1,
	profBonus: +2,
	armorProff: ['light', 'medium', 'shields'],
	weaponPoff: ['simple', 'martial'],
	saveThr: ['STR', 'CON'],
	name: 'Barbarian',
	classSkills: ['Animal Handling', 'Athletics', 'Intimidation', 'Perception', 'Survival', 'Nature'],
	initialEquip: [
		'Greataxe | Martial wapon',
		'Two Handaxes | Simple weapon',
		"Explorer's pack",
		'4 Javelins'
	],
	toolsProff: [],
	traits: ['Rage', 'Unarmored Defence'],
	resource: 2
};
