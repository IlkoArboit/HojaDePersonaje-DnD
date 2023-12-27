<script lang="ts">
	import { getSkillValues } from '../shared/helpers/helpers';
	import type { attribute } from '../shared/interfaces/general';
	import { personajePrueba } from './../shared/stores/store';

	let exampAttributes: attribute[] = [
		{
			name: 'Strength',
			value: 10,
			modifier: getModifier(10)
		},
		{
			name: 'Dexterity',
			value: 13,
			modifier: getModifier(13)
		},
		{
			name: 'Constitution',
			value: 19,
			modifier: getModifier(19)
		},
		{
			name: 'Intelligence',
			value: 8,
			modifier: getModifier(8)
		},
		{
			name: 'Wisdom',
			value: 12,
			modifier: getModifier(12)
		},
		{
			name: 'Charisma',
			value: 15,
			modifier: getModifier(15)
		}
	];

	$: {
		$personajePrueba.attributes = exampAttributes;
		$personajePrueba.skill = getSkillValues(exampAttributes);
	}

	function getModifier(attValue: number) {
		return Math.floor((attValue - 10) / 2);
	}

	function resetDeathSaves() {
		$personajePrueba.deathSaves.failures = [false, false, false];
		$personajePrueba.deathSaves.success = [false, false, false];
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
				bind:value={$personajePrueba.class}
				placeholder="Character class"
			/>
			<input
				readonly
				class="variant-filled-surface col-span-2 col-start-3 text-center border-0 rounded-lg pointer-events-none"
				type="text"
				name="race-input"
				id="race-input"
				bind:value={$personajePrueba.race}
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
				<span><!-- {$personajePrueba.class[0].hitDie * $personajePrueba.class[0].lvl} -->50</span>
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
		class="grid grid-rows-6 grid-cols-1 rounded-3xl justify-items-center gap-y-1 col-span-2 row-span-4 col-start-1 row-start-2 bg-surface-500"
	>
		{#each $personajePrueba.attributes as attribute}
			<div class="card w-2/3 flex flex-col align-middle text-center variant-filled-secondary">
				<span class="variant-filled-primary rounded-t-xl"
					>{attribute.name.substring(0, 3).toUpperCase()}</span
				>
				<span class="text-2xl w-2/5 self-center hover:variant-ghost-tertiary rounded-full"
					>{attribute.value}</span
				>
				<span class="w-1/5 self-center hover:variant-ghost-tertiary rounded-full"
					>{attribute.modifier}</span
				>
			</div>
		{/each}
	</div>

	<div
		class="col-span-3 col-start-3 row-span-2 row-start-2 rounded-lg grid grid-cols-3 grid-rows-6 gap-[2px]"
	>
		{#each $personajePrueba.skill as skill, i}
			<div class="col-start-{(i + 1) % 3} flex flex-col w-full rounded-lg">
				<p class="h-1/2 text-center rounded-t-lg variant-soft-primary">{skill.name}</p>
				<button
					class="h-1/2 align-middle variant-ghost-tertiary hover:variant-ringed-secondary rounded-b-lg"
					>{skill.value}</button
				>
			</div>
		{/each}
	</div>
</div>
