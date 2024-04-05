<script>
	import { ShoppingCart, CornerDownRight, Laugh, Meh, Frown } from 'lucide-svelte';
	export let filteredOptions;
</script>

<div class="flex w-full justify-center">
	<div class="-shadow-xl inset-1 flex w-full flex-col sm:w-9/12">
		<div class="bold hidden w-full justify-center bg-nord-1 p-2 sm:flex">
			<div class="w-1/6">Rating</div>
			<div class="w-2/6">Naam</div>
			<div class="w-2/6">Bijpassende sauzen</div>
			<div class="w-1/6">&nbsp;</div>
		</div>

		<ul tabindex="-1" class="min-h-full scroll-py-3 overflow-y-auto rounded-sm bg-slate-600 p-3">
			{#each filteredOptions as snack}
				<li class="select-none rounded-xl odd:bg-nord-2/50 hover:bg-nord-4/40">
					<div class="hidden items-center p-3 sm:flex">
						<div class="flex w-1/6">
							&nbsp;
							{snack.rating * 10}% &nbsp;
							{#if snack.rating > 7}
								<Laugh class="w-4 fill-nord-0" />
							{:else if snack.rating < 7 && snack.rating > 3}
								<Meh class="w-4 fill-nord-0" />
							{:else}
								<Frown class="w-4 fill-nord-0" />
							{/if}
							&nbsp;
						</div>
						<div class="w-2/6">
							{snack.name}
							<!-- Tags -->
							{#each snack.tags as tag}
								<span class="bg-{tag.color} rounded-sm p-1 text-xs">{tag.label}</span> &nbsp;
							{/each}
						</div>
						<div class="w-2/6">
							{#each snack.sauces as sauce}
								<a href={sauce.url} tabindex="-1" class="hover:text-teal-500" target="_BLANK"
									>{sauce.label}</a
								>,&nbsp;
							{/each}
						</div>
						<div class="w-1/6">
							<a
								href={snack.url}
								tabindex="-1"
								target="_BLANK"
								class="flex rounded-sm p-1 hover:text-teal-500"
							>
								Bestel&nbsp;<ShoppingCart class="w-4" />
							</a>
						</div>
					</div>

					<!-- Mobile -->
					<div class="flex flex-col p-2 sm:hidden">
						<div class="flex w-full">
							<div class="w-9/12">{snack.name}</div>
							<div class="w-3/12">
								<a
									href={snack.url}
									tabindex="-1"
									target="_BLANK"
									class="flex rounded-sm p-1 hover:text-teal-500"
								>
									Bestel&nbsp;<ShoppingCart class="w-4" />
								</a>
							</div>
						</div>
						<div class="flex w-full">
							<CornerDownRight class="mx-4 w-4" />
							{snack.rating * 10}% &nbsp;
							{#if snack.rating > 7}
								<Laugh class="w-4 fill-nord-0" />
							{:else if snack.rating < 7 && snack.rating > 3}
								<Meh class="w-4 fill-nord-0" />
							{:else}
								<Frown class="w-4 fill-nord-0" />
							{/if}
							&nbsp;
							{#each snack.tags as tag}
								<span class="bg-{tag.color} h-7 rounded-sm p-1 text-xs">{tag.label}</span> &nbsp;
							{/each}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
