export interface character {
	name: string;
	lvl: number;
	charClass: charClass;
	race?: race;
	background?: string;
	deathSaves: { success: boolean[]; failures: boolean[] };
	attributes: attribute[];
	exp: number;
	hitPoints: number;
	maxHitPoints: number;
	armorClass: number;
	initiative: number;
	inventory?: inventory;
	speed: number;
}

export interface SubRace {
	name: string;
	summary: string;
	traits: string[];
	abilityIncrease: {
		str: number;
		dex: number;
		con: number;
		int: number;
		wis: number;
		cha: number;
	};
	size: string;
	speed: number;
	languages: string[];
}

export interface race {
	name: string;
	summary: string;
	traits: string[];
	abilityIncrease: {
		str: number;
		dex: number;
		con: number;
		int: number;
		wis: number;
		cha: number;
	};
	size: string;
	speed: number;
	languages: string[];
	subRace?: SubRace;
}

export interface SubClass {
	name: string;
	features: string[];
	// Otros campos específicos de la subclase
}
export interface charClass {
	name: string;
	lvl: number;
	hitDie: number;
	initialHp: number;
	saveThr: string[];
	weaponPoff: string[];
	armorProff: string[];
	toolsProff: string[];
	resource: number | string[] | number[];
	initialEquip: string[];
	traits: string[];
	profBonus: number;
	classSkills: string[];
	subClass?: SubClass;
}

export interface attribute {
	name: string;
	value: number;
	modifier: number;
    skills?: skill[];
}

export type skill = {
	name: string;
	value: number;
	proficiency: boolean;
};

export interface weapon {
	type: string;
	name: string;
	cost: string;
	damage: {
		dice: number[];
		dmgType: string;
	};
	weight: number;
	properties: {
		name: string;
		desciption: string;
	};
	description: string;
}

export interface armor {
	type: string;
	name: string;
	cost: number;
	armorClass: number;
	maxDexMod: boolean | number;
	reqStrength: boolean | number;
	stealthDis: boolean;
	wight: number;
	description: string;
}

export interface gear {
	name: string;
	cost: number;
	wight: number;
	description: string;
}

export interface inventory {
	weapons: weapon[];
	armor: armor[];
	gear: gear[];
}
