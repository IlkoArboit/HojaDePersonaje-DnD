<script lang="ts">
	import { getSkillValues } from '../shared/helpers/helpers';
	import type { attribute } from '../shared/interfaces/general';
	import { personajePrueba } from './../shared/stores/store';
	
	let exampAttributes: attribute[] =[{
		name:'Strength',
		value: 10,
		modifier: getModifier(10),
	},{
		name:'Dexterity',
		value: 13,
		modifier: getModifier(13),
	},{
		name:'Constitution',
		value: 19,
		modifier: getModifier(19),
	},{
		name:'Intelligence',
		value: 8,
		modifier: getModifier(8),
	},{
		name:'Wisdom',
		value: 12,
		modifier: getModifier(12),
	},{
		name:'Charisma',
		value: 15,
		modifier: getModifier(15),
	},]

	$:{
		$personajePrueba.attributes = exampAttributes;
		$personajePrueba.skill = getSkillValues(exampAttributes);
	}

	function getModifier(attValue: number){
		return Math.floor((attValue - 10) / 2);
	}

	function getSkills(){
		
	}
</script>

<div class="ml-3 h-[100vh] grid grid-cols-10 grid-rows-5 gap-y-2 gap-x-8">
	<div class="grid grid-cols-2 grid-rows-2 gap-y-3 mt-3 col-span-4 row-span-1 col-start-1">
		<div class="col-span-2 row-span-1 row-start-1">
			<input
				readonly
				class="variant-filled-surface border-0 text-center w-full place-self-center rounded-lg pointer-events-none"
				type="text"
				name="name-input"
				id="name-input"
				bind:value={$personajePrueba.name}
				placeholder="Character name"
			/>
		</div>
		<span class="col-span-2 row-span-1 row-start-2 gap-x-2 px-4 flex place-content-around"
			><input
				readonly
				class="variant-filled-surface text-center border-0 rounded-lg pointer-events-none"
				type="text"
				name="class-input"
				id="class-input"
				bind:value={$personajePrueba.class}
				placeholder="Character class"
			/>
			<input
				readonly
				class="variant-filled-surface text-center border-0 rounded-lg pointer-events-none"
				type="text"
				name="race-input"
				id="race-input"
				bind:value={$personajePrueba.race}
				placeholder="Character race"
			/></span
		>
	</div>

	<div class="col-start-5 col-span-2 row-start-1 row-span-1 variant-outline-secondary">
		<div>
			<p>Hit Die</p>
		</div>
		<div>
			<p>CA</p>
		</div>
	</div>

	<div class="grid grid-rows-6 grid-cols-1 rounded-3xl justify-items-center gap-y-1 col-span-2 row-span-4 col-start-1 row-start-2 bg-surface-500 py-3">
		{#each $personajePrueba.attributes as attribute}
			<div class="card w-2/3 flex flex-col align-middle text-center variant-filled-secondary">
				<span class="variant-filled-primary rounded-t-xl">{attribute.name.substring(0,3).toUpperCase()}</span>
				<span class="text-2xl w-2/5 self-center hover:variant-ghost-tertiary rounded-full">{attribute.value}</span>
				<span class="w-1/5 self-center hover:variant-ghost-tertiary rounded-full">{attribute.modifier}</span>
			</div>
			{/each}
	</div>

	<div class="col-span-2 col-start-3 row-span-4 row-start-2 rounded-lg flex flex-col variant-outline-secondary place-content-evenly">
		{#each $personajePrueba.skill as skill,i}
		<div class="flex w-full {i !== 17 ? 'border-b border-b-secondary-800': ''} px-1 grow">
			<p class="w-1/2 align-middle">{skill.name}</p>
			<button class="w-1/2">{skill.value}</button>
		</div>
		{/each}
	</div>
</div>
