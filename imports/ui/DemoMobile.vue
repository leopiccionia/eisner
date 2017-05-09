<template>
	<div class="mobile-display" v-touch:swipeleft="previous" v-touch:swiperight="next">
		<p>{{title}} # {{edition}}, page {{page}}/{{max_page}}</p>
		<img class="text-center" :src="url(page)"/>
		<div id="previous" @click="previous()"></div>
		<div id="next" @click="next()"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Baseball Comics',
				edition: 1,
				page: 1,
				max_page: 32
			};
		},
		methods: {
			previous() {
				if (this.page > 1)
					this.page -= 1;
			},
			next() {
				if(this.page < this.max_page)
					this.page += 1;
			},
			url: (n) => (n < 10) ? '/img/baseball-comics-001/0' + n + '.png' : '/img/baseball-comics-001/' + n + '.png'
		}
	};
</script>

<style scoped>
	.mobile-display {
		text-align: center;
	}

	img {
		max-width: 100vw;
	}

	#previous, #next {
		position: absolute;
		height: 100%;
		width: 30%;
		top: 0;
	}

	#previous {
		left: 0;
	}

	#next {
		left: 70%;
	}
</style>