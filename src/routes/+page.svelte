<script>
	import Header from '$lib/components/header.svelte';
	import List from '$lib/components/list.svelte';
	import { snacks } from '$lib/snacks';

	let search = '';
	let activeFilters = { all: true };
	$: filteredOptions = getFilteredOptions(search, activeFilters, snacks);

	function getFilteredOptions(value, activeFilters, snacks) {
		// Filter tags
		snacks = snacks.filter((snacko) => {
			let hasTag = snacko.tags.some((tag) => {
				if (activeFilters.all) {
					return true;
				}

				for (let filter in activeFilters) {
					if (activeFilters[filter] && tag.name === filter) {
						return true;
					}
				}

				return false;
			});

			return hasTag;
		});

		if (value == '') {
			return snacks;
		}

		return snacks.filter(function (snack) {
			return snack.name.toLowerCase().includes(value.toLowerCase());
		});
	}
</script>

<svelte:head>
	<title>The snack list</title>
</svelte:head>

<div class="contents">
	<Header bind:search bind:activeFilters />
	<List {filteredOptions} {activeFilters} />
</div>
