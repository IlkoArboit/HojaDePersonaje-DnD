import type { attribute, skill } from "../interfaces/general";

export function getSkillValues(attributeList: attribute[]) {
    // eslint-disable-next-line prefer-const
    let skills: skill[] = [
        {
            name: "Athletism",
            value: attributeList[0].modifier,
            proficiency: false,
        },
        {
            name: "Acrobatics",
            value: attributeList[1].modifier,
            proficiency: false,
        },
        {
            name: "Sleight of Hand",
            value: attributeList[1].modifier,
            proficiency: false,
        },
        {
            name: "Stealth",
            value: attributeList[1].modifier,
            proficiency: false,
        },
        {
            name: "Arcana",
            value: attributeList[3].modifier,
            proficiency: false,
        },
        {
            name: "History",
            value: attributeList[3].modifier,
            proficiency: false,
        },
        {
            name: "Investigation",
            value: attributeList[3].modifier,
            proficiency: false,
        },
        {
            name: "Nature",
            value: attributeList[3].modifier,
            proficiency: false,
        },
        {
            name: "Religion",
            value: attributeList[3].modifier,
            proficiency: false,
        },
        {
            name: "Animal Handling",
            value: attributeList[4].modifier,
            proficiency: false,
        },
        {
            name: "Insight",
            value: attributeList[4].modifier,
            proficiency: false,
        },
        {
            name: "Medicine",
            value: attributeList[4].modifier,
            proficiency: false,
        },
        {
            name: "Perception",
            value: attributeList[4].modifier,
            proficiency: false,
        },
        {
            name: "Survival",
            value: attributeList[4].modifier,
            proficiency: false,
        },
        {
            name: "Deception",
            value: attributeList[5].modifier,
            proficiency: false,
        },
        {
            name: "Intimidation",
            value: attributeList[5].modifier,
            proficiency: false,
        },
        {
            name: "Performance",
            value: attributeList[5].modifier,
            proficiency: false,
        },
        {
            name: "Persuassion",
            value: attributeList[5].modifier,
            proficiency: false,
        },
    ];
    return skills;
}