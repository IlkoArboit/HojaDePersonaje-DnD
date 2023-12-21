import type { attribute, skill } from "../interfaces/general";

export function getSkillValues(attributeList: attribute[]) {
    // eslint-disable-next-line prefer-const
    let skills: skill[] = [
        {
            name: "Athletism",
            value: attributeList[0].modifier
        },
        {
            name: "Acrobatics",
            value: attributeList[1].modifier
        },
        {
            name: "Sleight of Hand",
            value: attributeList[1].modifier
        },
        {
            name: "Stealth",
            value: attributeList[1].modifier
        },
        {
            name: "Arcana",
            value: attributeList[3].modifier
        },
        {
            name: "History",
            value: attributeList[3].modifier
        },
        {
            name: "Investigation",
            value: attributeList[3].modifier
        },
        {
            name: "Nature",
            value: attributeList[3].modifier
        },
        {
            name: "Religion",
            value: attributeList[3].modifier
        },
        {
            name: "Animal Handling",
            value: attributeList[4].modifier
        },
        {
            name: "Insight",
            value: attributeList[4].modifier
        },
        {
            name: "Medicine",
            value: attributeList[4].modifier
        },
        {
            name: "Perception",
            value: attributeList[4].modifier
        },
        {
            name: "Survival",
            value: attributeList[4].modifier
        },
        {
            name: "Deception",
            value: attributeList[5].modifier
        },
        {
            name: "Intimidation",
            value: attributeList[5].modifier
        },
        {
            name: "Performance",
            value: attributeList[5].modifier
        },
        {
            name: "Persuassion",
            value: attributeList[5].modifier
        },
    ];
    return skills;
}