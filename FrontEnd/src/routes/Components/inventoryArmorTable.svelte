<script>

	import { personajePrueba } from "../../shared/stores/store";

</script>

<div class="table-container max-h-full overflow-y-scroll">
    <table class="table table-hover border-separate border-spacing-y-[2px] border-spacing-x-0 w-full">
        <thead>
            <tr>
                <th class="px-1 variant-filled-primary text-center rounded-tl-xl">Nombre</th>
                <th class="px-1 variant-filled-primary text-center">Armor type</th>
                <th class="px-1 variant-filled-primary text-center">AC</th>
                <th class="px-1 variant-filled-primary text-center">Min STR</th>
                <th class="px-1 variant-filled-primary text-center">DEX Mod</th>
                <th class="px-1 variant-filled-primary text-center">Stealth DSVG</th>
                <th class="px-1 variant-filled-primary text-center rounded-tr-xl">Description</th>
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