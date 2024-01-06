<script>

	import { personajePrueba } from "../../shared/stores/store";

</script>

<div class="table-container">
    <table class="border-separate border-spacing-y-[2px] border-spacing-x-0 w-full">
        <thead>
            <tr>
                <th class="px-1 variant-filled-primary rounded-tl-xl">Nombre</th>
                <th class="px-1 variant-filled-primary">Dmg Dice</th>
                <th class="px-1 variant-filled-primary">Dmg Type</th>
                <th class="px-1 variant-filled-primary">Weapon type</th>
                <th class="px-1 variant-filled-primary">Properties</th>
                <th class="px-1 variant-filled-primary">Range</th>
                <th class="px-1 variant-filled-primary rounded-tr-xl">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each $personajePrueba.inventory.weapons as weapon}
                <tr>
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.name}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.damage.dice[0]}d{weapon.damage.dice[1]}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.damage.dmgType}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.type}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.properties.name}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{weapon.range}</td
                    >
                    <td class="variant-soft-secondary border-b border-b-primary-400"
                        >{weapon.description}</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>