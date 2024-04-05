const colors = {
	meat: 'red-600',
	vega: 'green-500',
	vegan: 'purple-500'
};

const meat = { color: colors.meat, name: 'meat', label: 'vlees' };
const vega = { color: colors.vega, name: 'vega', label: 'vega' };
const vegan = { color: colors.vegan, name: 'vegan', label: 'vegan' };

const sauce = {
	samurai: {
		label: 'samurai',
		url: 'https://www.ah.nl/producten/product/wi226237/gouda-s-glorie-red-hot-samurai-saus'
	},
	curry: {
		label: 'curry',
		url: 'https://www.ah.nl/producten/product/wi441050/hela-kruiden-ketchup-curry-original'
	},
	chili: {
		label: 'chili',
		url: 'https://www.ah.nl/producten/product/wi439402/go-tan-chilisaus-sweet-original'
	},
	mayo: {
		label: 'mayo',
		url: 'https://www.ah.nl/producten/product/wi496580/van-wijngaarden-s-zaanse-mayonaise'
	},
	mustard: {
		label: 'mosterd',
		url: 'https://www.ah.nl/producten/product/wi226236/kuhne-franse-mosterd'
	}
};

let snacks = [
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi492526/mora-chili-cheese',
		name: 'Chili cheese',
		sauces: [sauce.mayo, sauce.chili, sauce.samurai],
		tags: [vega]
	},
	{
		rating: 6,
		url: 'https://www.ah.nl/producten/product/wi189411/mora-kip-fingers-mini-s',
		name: 'Kip vingers',
		sauces: [sauce.samurai, sauce.curry, sauce.chili, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi492754/kaastengels-old-amsterdam',
		name: 'Kaas stengels (old amsterdam)',
		sauces: [sauce.chili],
		tags: [vega]
	},
	{
		rating: 7,
		url: 'https://www.ah.nl/producten/product/wi183228/ah-mini-loempia-met-groente',
		name: 'Loempia',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [vega, vegan]
	},
	{
		rating: 8,
		url: 'https://www.ah.nl/producten/product/wi388894/mora-oven-mini-frikandellen',
		name: 'Frikandel',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi185420/mora-carrero',
		name: 'Carrero',
		sauces: [sauce.samurai, sauce.curry],
		tags: [meat]
	},
	{
		rating: 7,
		url: 'https://www.ah.nl/producten/product/wi486328/mora-oven-mini-kaassouffle',
		name: 'Kaassoufflé',
		sauces: [sauce.mayo, sauce.chili],
		tags: [vega]
	},
	{
		rating: 6.5,
		url: 'https://www.ah.nl/producten/product/wi459524/mora-oven-hapjesmix',
		name: 'Mix (mora)',
		sauces: [sauce.curry, sauce.chili],
		tags: [meat, vega, vegan]
	},
	{
		rating: 2,
		url: 'https://www.ah.nl/producten/product/wi383539/kwekkeboom-oven-borrelsnacks-bamihapjes',
		name: 'Bami (kwekkeboom)',
		sauces: [sauce.curry, sauce.chili],
		tags: [vega]
	},
	{
		rating: 8,
		url: 'https://www.ah.nl/producten/product/wi232374/kwekkeboom-oven-bitterballen',
		name: 'Bitterbal (kwekkeboom)',
		sauces: [sauce.mayo, sauce.mustard],
		tags: [meat]
	},
	{
		rating: 6,
		url: 'https://www.ah.nl/producten/product/wi232378/kwekkeboom-oven-kiphapjes',
		name: 'Kipnuggets (kwekkeboom)',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 8.5,
		url: 'https://www.ah.nl/producten/product/wi440444/kwekkeboom-old-amsterdam-bitterballen',
		name: 'Kaas bal (old amsterdam)',
		sauces: [sauce.mustard, sauce.chili],
		tags: [vega]
	},
	// Note: can't find the ah:link
	// {
	// 	rating: 7,
	// 	url: '',
	// 	name: 'Groentebal (mora)',
	// 	sauces: [sauce.chili, sauce.curry],
	// 	tags: [vegan]
	// },
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi516198/mora-cheese-onion',
		name: 'Cheese onion (mora)',
		sauces: [sauce.chili, sauce.mustard, sauce.mayo],
		tags: [vega]
	},
	{
		rating: 8,
		url: 'https://www.ah.nl/producten/product/wi56602/topking-vlammetjes',
		name: 'Vlammetjes',
		sauces: [sauce.samurai, sauce.curry, sauce.chili, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 7,
		url: 'https://www.ah.nl/producten/product/wi444420/kaassticks',
		name: 'Kaas sticks',
		sauces: [sauce.mayo, sauce.chili],
		tags: [vega]
	},
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi451463/mora-crispy-chicken-original',
		name: 'Crispy Chicken (mora)',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 9,
		url: 'https://www.ah.nl/producten/product/wi451479/mora-crispy-chicken-spicy',
		name: 'Crispy Chicken pittig (mora)',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [meat]
	},
	// No longer available
	// {
	//   rating: 10,
	//   url: "",
	//   name: "Roosterz Mix",
	//   sauces: ["Samoerai", "chili", "curry", "mayo"],
	// tags: [{color: colors.meat, name: 'vlees'}]
	// },
	{
		rating: 7,
		url: 'https://www.ah.nl/producten/product/wi516205/dr-oetker-pizza-bitterballen-salami',
		name: 'Pizza Bitterbal (dr Oetker)',
		sauces: [sauce.samurai, sauce.chili],
		tags: [meat]
	},
	{
		rating: 8,
		url: 'https://www.ah.nl/producten/product/wi232376/kwekkeboom-oven-kaashapjes',
		name: 'Kaashapjes (kwekkeboom)',
		sauces: [sauce.mayo, sauce.chili],
		tags: [vega]
	},
	{
		rating: 8,
		url: 'https://www.ah.nl/producten/product/wi185421/mora-pikanto',
		name: 'Pikanto',
		sauces: [sauce.samurai, sauce.chili, sauce.curry, sauce.mayo],
		tags: [meat]
	},
	{
		rating: 6,
		url: 'https://www.ah.nl/producten/product/wi238825/chio-borrel-bites-mix-paprika-sweet-chili',
		name: 'Borrel bites mix (chio)',
		sauces: [],
		tags: [vegan]
	},
	{
		rating: 6,
		url: 'https://www.ah.nl/producten/product/wi140746/ah-katjang-pedis-gezouten',
		name: 'Katjang pedis',
		sauces: [],
		tags: [vegan]
	},
	{
		rating: 6,
		url: 'https://www.ah.nl/producten/product/wi477621/duyvis-borrelnootjes-provencale',
		name: 'Borrelnootjes provencale (Duyvis)',
		sauces: [],
		tags: [vegan]
	}
];

snacks = snacks.sort(function (a, b) {
	if (a.rating === b.rating) {
		return 0;
	} else {
		return a.rating > b.rating ? -1 : 1;
	}
});

export { snacks };
