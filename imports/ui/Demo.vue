<template lang="pug">
.demo
	p {{title}} # {{edition}}, page {{page}}/{{max_page}}
	v-touch(@swiperight='previous', @swipeleft='next')
		img.text-center(:src='url(page)')
		#previous(@click='previous()')
		#next(@click='next()')
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
	.demo {
		text-align: center;
	}

	img {
		max-width: 100vw;
	}

	#previous, #next {
		position: absolute;
		height: 100%;
		width: 35%;
		top: 0;
	}

	#previous {
		left: 0;
	}

	#next {
		left: 65%;
	}
</style>