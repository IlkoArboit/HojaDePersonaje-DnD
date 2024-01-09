<script>
	import { personajePrueba } from '../../shared/stores/store';
</script>

<div class="table-container">
	<table class="table table-hover border-separate border-spacing-y-[2px] border-spacing-x-0 w-full">
		<thead>
			<tr>
				<th class="px-1 variant-filled-primary text-center rounded-tl-xl">Name</th>
				<th class="px-1 variant-filled-primary text-center">Cost</th>
				<th class="px-1 variant-filled-primary text-center">Weight</th>
				<th class="px-1 variant-filled-primary text-center rounded-tr-xl">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each $personajePrueba.inventory.gear as gear}
				<tr>
					<td class="variant-soft-secondary text-center border-b border-b-primary-400"
						>{gear.name}</td
					>
					<td class="variant-soft-secondary text-center border-b border-b-primary-400"
						>{gear.cost}</td
					>
					<td class="variant-soft-secondary text-center border-b border-b-primary-400"
						>{gear.wight}</td
					>
					<td class="variant-soft-secondary border-b border-b-primary-400">{gear.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
