<script>

	import { personajePrueba } from "../../shared/stores/store";

</script>

<div class="table-container">
    <table class="border-separate border-spacing-y-[2px] border-spacing-x-0 w-full">
        <thead>
            <tr>
                <th class="px-1 variant-filled-primary rounded-tl-xl">Nombre</th>
                <th class="px-1 variant-filled-primary">Armor type</th>
                <th class="px-1 variant-filled-primary">AC</th>
                <th class="px-1 variant-filled-primary">Min STR</th>
                <th class="px-1 variant-filled-primary">DEX Mod</th>
                <th class="px-1 variant-filled-primary">Stealth DSVG</th>
                <th class="px-1 variant-filled-primary rounded-tr-xl">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each $personajePrueba.inventory.armor as armor}
                <tr>
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.name}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.type}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.armorClass}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.reqStrength ? armor.reqStrength : '-'}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.maxDexMod ? armor.maxDexMod : '-'}</td
                    >
                    <td class="variant-soft-secondary text-center border-b border-b-primary-400"
                        >{armor.stealthDis ? 'Yes' : 'No'}</td
                    >
                    <td class="variant-soft-secondary border-b border-b-primary-400"
                        >{armor.description}</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>