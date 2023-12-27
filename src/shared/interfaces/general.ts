
export type character = {
    name: string,
    lvl: number,
    class?: charClass[],
    race?: race,
    background?: string,
    deathSaves: {success:boolean[], failures:boolean[]},
    attributes: attribute[],
    skill: skill[],
    exp: number,
    hitPoints: number,
    maxHitPoints: number,
    armorClass: number,
    initiative: number,
    inventory?: inventory,
    speed: number,
}

export type race = {
    name: string,
    summary: string,
    traits: string[],
    abilityIncrease: {
        str: number,
        dex: number,
        con: number,
        int: number,
        wis: number,
        cha: number,
    }
    size: string,
    speed: number,
    languages: string[],
    subRace: race,
}

export type charClass = {
    name: string,
    lvl: number,
    hitDie: number,
    initialHp: number,
    saveThr: string[],
    weaponPoff: string[],
    armorProff: string[],
    toolsProff: string[],
    resource: number | string[],
    initialEquip: string[],
    traits: string[],
}

export type attribute = {
    name: string,
    value: number,
    modifier: number,
}

export type skill = {
    name: string,
    value: number,
    proficiency: boolean,
}

export type weapon = {
    type: string,
    name: string,
    cost: string,
    damage: {
        dice: number[],
        dmgType: string,
    }
    weight: number,
    properties: {
        name: string,
        desciption: string,
    }
    description: string,
}

export type armor = {
    type: string,
    name: string,
    cost: number,
    armorClass: number,
    maxDexMod: boolean | number,
    reqStrength: boolean | number,
    stealthDis: boolean,
    wight: number,
    description: string,
}

export type gear = {
    name: string,
    cost: number,
    wight: number,
    description: string,
}

export type inventory = {
    weapons: weapon[],
    armor: armor[],
    gear: gear[],
}