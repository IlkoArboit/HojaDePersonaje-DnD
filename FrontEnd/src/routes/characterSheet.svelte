<script lang="ts">
	import InventoryGearTable from './Components/inventoryGearTable.svelte';
	import InventoryArmorTable from './Components/inventoryArmorTable.svelte';
	import { getModifier } from '../shared/helpers/helpers';
	import type { attribute } from '../shared/interfaces/general';
	import { personajePrueba } from './../shared/stores/store';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import InverntoryWeaponTable from './Components/inverntoryWeaponTable.svelte';

	let tabSet: number = 0;

	function resetDeathSaves() {
		$personajePrueba.deathSaves.failures = [false, false, false];
		$personajePrueba.deathSaves.success = [false, false, false];
	}

	function getSavingThrow(att: attribute) {
		if (att.savingThrow) {
			return att.modifier + $personajePrueba.charClass.profBonus;
		} else {
			return att.modifier;
		}
	}
</script>

<div class="ml-3 h-[100vh] grid grid-cols-10 grid-rows-5 gap-y-2 gap-x-8">
	<div class="grid grid-cols-3 grid-rows-2 gap-y-3 mt-3 col-span-4 row-span-1 col-start-1">
		<div class="col-span-3 row-span-1 row-start-1">
			<input
				readonly
				class="variant-filled-surface border-0 h-full text-center w-full place-self-center rounded-lg pointer-events-none"
				type="text"
				name="name-input"
				id="name-input"
				bind:value={$personajePrueba.name}
				placeholder="Character name"
			/>
		</div>
		<span class="col-span-3 row-span-1 row-start-2 grid grid-cols-5 gap-x-1"
			><input
				readonly
				class="variant-filled-surface col-span-2 col-start-1 text-center border-0 rounded-lg pointer-events-none"
				type="text"
				name="class-input"
				id="class-input"
				bind:value={$personajePrueba.charClass.name}
				placeholder="Character class"
			/>
			<input
				readonly
				class="variant-filled-surface col-span-2 col-start-3 text-center border-0 rounded-lg pointer-events-none"
				type="text"
				name="race-input"
				id="race-input"
				bind:value={$personajePrueba.race.name}
				placeholder="Character race"
			/>
			<input
				readonly
				class="variant-filled-surface col-span-1 col-start-5 text-center border-0 rounded-lg pointer-events-none"
				type="number"
				name="lvl-input"
				id="lvl-input"
				bind:value={$personajePrueba.lvl}
				placeholder="Character level"
			/></span
		>
	</div>

	<div
		class="col-start-5 col-span-2 row-start-1 row-span-1 grid grid-cols-3 grid-rows-5 variant-outline-secondary"
	>
		<div
			class="flex col-span-2 col-start-1 row-span-3 row-start-1 variant-outline-primary text-center justify-around"
		>
			<div>
				<p>Current HP</p>
				<span>{$personajePrueba.hitPoints}</span>
			</div>
			<div>
				<p>Max HP</p>
				<span>{$personajePrueba.charClass.initialHp}</span>
			</div>
		</div>
		<div
			class="flex flex-row justify-around col-span-2 row-span-2 col-start-1- row-start-4 variant-outline-tertiary"
		>
			<div class="text-center">
				<p>AC</p>
				<span>{$personajePrueba.armorClass}</span>
			</div>
			<div class="text-center">
				<p>Initiative</p>
				<span>{$personajePrueba.initiative}</span>
			</div>
			<div class="text-center">
				<p>Speed</p>
				<span>{$personajePrueba.speed} ft</span>
			</div>
		</div>
		<div class="flex flex-col row-span-5 col-span-1 row-start-1 col-start-3">
			<p>Death Saves</p>
			<div class="flex flex-col items-center grow gap-y-1">
				<button
					class="variant-soft-success rounded-lg w-3/4"
					on:click={() => {
						let lastIndex = $personajePrueba.deathSaves.success.findIndex(
							(value) => value === false
						);
						lastIndex >= 0
							? ($personajePrueba.deathSaves.success[lastIndex] =
									!$personajePrueba.deathSaves.success[lastIndex])
							: resetDeathSaves();
					}}>Success</button
				>
				<div class="flex">
					{#each $personajePrueba.deathSaves.success as succ}
						<span
							class="badge-icon variant-filled{succ ? '-success' : ''} material-symbols-outlined"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								><path
									d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
								/></svg
							></span
						>
					{/each}
				</div>
			</div>
			<div class="flex flex-col items-center grow gap-y-1">
				<button
					class="variant-soft-error rounded-lg w-3/4"
					on:click={() => {
						let lastIndex = $personajePrueba.deathSaves.failures.findIndex(
							(value) => value === false
						);
						lastIndex >= 0
							? ($personajePrueba.deathSaves.failures[lastIndex] =
									!$personajePrueba.deathSaves.failures[lastIndex])
							: resetDeathSaves();
					}}>Failure</button
				>
				<div class="flex">
					{#each $personajePrueba.deathSaves.failures as fail}
						<span class="badge-icon variant-filled{fail ? '-error' : ''} material-symbols-outlined"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								><path
									d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
								/></svg
							></span
						>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col place-content-evenly rounded-3xl col-span-3 row-span-4 col-start-1 row-start-2 bg-surface-500 border-r border-r-primary-500"
	>
		{#each $personajePrueba.attributes as attribute, i}
			<div class="w-full flex justify-between">
				<div
					class="card w-1/4 flex flex-col text-center variant-filled-secondary place-self-center m-auto"
				>
					<span class="variant-filled-primary rounded-t-xl"
						>{attribute.name.substring(0, 3).toUpperCase()}</span
					>
					<span class="text-2xl w-2/5 self-center hover:variant-ghost-tertiary rounded-full"
						>{#if attribute.modifier > 0}
							+
						{/if}{attribute.modifier}</span
					>
					<span class="w-1/5 self-center hover:variant-ghost-tertiary rounded-full"
						>{attribute.value}</span
					>
				</div>
				<div
					class="flex flex-col flex-wrap w-1/2 align-text-bottom justify-center border-l border-l-primary-500"
				>
					{#if attribute.skills}
						{#each attribute.skills as skill}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								on:click={() => alert(`Rolled ${skill.name}`)}
								class="text-xs grid grid-cols-3 border-b border-b-primary-500 cursor-pointer hover:variant-ghost-tertiary"
							>
								<span class="ml-1 col-span-2">{skill.name}</span>
								<span class="place-self-center">{skill.value}</span>
							</div>
						{/each}
					{/if}
					<div class="text-xs grid grid-cols-3 cursor-pointer hover:variant-ghost-tertiary">
						<span class="ml-1 col-span-2">Saving Throw</span>
						<span class="place-self-center">{getSavingThrow(attribute)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="variant-ringed-tertiary flex flex-col row-start-2 col-span-2 h-min">
		<div class="flex justify-around">
			<p>Passive Perception</p>
			<span class="variant-outline-primary rounded-full px-2"
				>{10 + $personajePrueba.attributes[4].modifier}</span
			>
		</div>
		<div class="variant-ringed-tertiary row-start-5 col-span-2">
			<div class="flex justify-around">
				<p>Profieciency Bonus</p>
				<span class="variant-outline-primary rounded-full px-2"
					>+{$personajePrueba.charClass.profBonus}</span
				>
			</div>
		</div>
	</div>

	<div class="row-start-3 col-span-5 row-span-3">
		<h1 class="text-center text-4xl">Inventory</h1>
		<div class="max-h-[90%] overflow-y-auto">
			<!-- svelte-ignore empty-block -->
			<TabGroup justify="justify-center">
				<Tab bind:group={tabSet} name="Weapons Tab" value={0}>
					<span>Weapons</span>
				</Tab>
				<Tab bind:group={tabSet} name="Armor Tab" value={1}>Armor</Tab>
				<Tab bind:group={tabSet} name="Gear Tab" value={2}>Gear</Tab>
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<InverntoryWeaponTable />
					{:else if tabSet === 1}
						<InventoryArmorTable />
					{:else if tabSet === 2}
						<InventoryGearTable />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>

	<div class="variant-outline-primary col-span-4 row-span-2">
		<p class="text-center text-3xl">Atacks and Spells</p>
		<div>
			<!-- Responsive Container (recommended) -->
			<div class="table-container">
				<!-- Native Table Element -->
				<table class="table table-hover">
					<thead>
						<tr>
							<th class="text-center">Weapon</th>
							<th class="text-center">Attack DMG</th>
							<th class="text-center">DMG type</th>
						</tr>
					</thead>
					<tbody>
						{#each $personajePrueba.inventory.weapons as weapon, i}
							<tr>
								<td class="text-center">{weapon.name}</td>
								<td class="text-center">{weapon.damage.dice[0]+'d'+weapon.damage.dice[1]}{($personajePrueba.charClass.weaponPoff.includes(weapon.name) || $personajePrueba.charClass.weaponPoff.includes(weapon.type))? ('+'+$personajePrueba.charClass.profBonus) : ''}</td>
								<td class="text-center capitalize">{weapon.damage.dmgType}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
