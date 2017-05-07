<template>
	<div class="desktop-display">
		<div class="thumbs-gallery" v-show="thumbs_shown">
			<span v-for="n in max_page">
				<img class="thumbnail" :title="n" :alt="n" :src="to_url(n)" @click="goto_page(n)" />
			</span>
		</div>

		<div class="page single-page" v-show="mode == 'single' && !thumbs_shown">
			<img :src="to_url(page)" @click="next()" />
		</div>

		<div v-show="mode == 'double' && !thumbs_shown">
			<div class="page page-left" @click="previous()">
				<img :src="to_url(page)" v-if="page > 0 && page <= max_page" />
			</div>
			<div class="page page-right" @click="next()">
				<img :src="to_url(page + 1)" v-if="page + 1 <= max_page" />
			</div>
		</div>

		<div class="continuous" v-show="mode == 'continuous' && !thumbs_shown">
			<p v-for="n in max_page">
				<img :alt="n" :src="to_url(n)">
			</p>
		</div>

		<footer>
			<div>
				<span>
					<!--<img src="img/icon_transparent.svg"/>-->
				</span>
				<button class="btn" @click="single_page()">Single</button>
				<!--<button @click="double_page()">Double</button>-->
				<button class="btn" @click="continuous()">Continuous</button>
				<button class="btn" @click="thumbs()">
					<i class="glyphicon glyphicon-th"></i>
				</button>

				<button class="btn" @click="previous()">
					<i class="glyphicon glyphicon-chevron-left"></i>
				</button>
				<button class="btn" @click="next()">
					<i class="glyphicon glyphicon-chevron-right"></i>
				</button>

				<progress :value="current_page" :max="max_page"/>
				{{current_page}}/{{max_page}}
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		data: () => ({
			title: 'Baseball Comics',
			edition: 1,
			page: 1,
			max_page: 32,
			mode: 'single',
			thumbs_shown: false
		}),
		computed: {
			current_page: function(){
				if(this.mode == 'double')
					return Math.max(this.page, 1);
				return this.page;
			}
		},
		methods: {
			/* NAVIGATION */
			first: function(){
				if(this.mode == 'continuous')
					noop();
				if(this.mode == 'double')
					this.page = 0;
				else
					this.page = 1;
			},
			last: function(){
				if(this.mode == 'double' && this.max_page % 2 == 1)
					this.page = this.max_page - 1;
				else
					this.page = this.max_page;
			},
			previous: function(){
				if(this.mode == 'double')
					this.page = Math.max(this.page - 2, 0);
				else
					this.page = Math.max(this.page - 1, 1);
			},
			next: function(){
				if(this.mode == 'double')
					this.page = Math.min(this.page + 2, this.max_page);
				else
					this.page = Math.min(this.page + 1, this.max_page);
			},
			goto_page: function(n){
				if(this.mode == 'double' & n % 2 == 1)
					this.page = n - 1;
				else
					this.page = n;
				this.thumbs_shown = false;
			},
			/* VIEW MODE */
			single_page: function() {
				this.mode = 'single';
				this.thumbs_shown = false;
				if(this.page == 0)
					this.page = 1;
			},
			double_page: function() {
				this.mode = 'double';
				this.thumbs_shown = false;
				if(this.page %2 == 1)
					this.page -= 1;
			},
			continuous: function() {
				this.mode = 'continuous';
				this.thumbs_shown = false;
			},
			thumbs: function() {
				this.thumbs_shown = !(this.thumbs_shown);
			},
			/* UTILS */
			to_url: function(n) {
				if(n < 10)
					n = '0' + n;
				return 'img/baseball-comics-001/' + n + '.png';
			}
		},
		created: function() {
			window.addEventListener('keydown', function(e) {
				alert(eisner);
				if(eisner.mode == 'continuous')
					return;
				var key = e.which || e.keyCode;
				switch(key) {
					case 33: // [PgUp]
					case 37: // [<-]
						eisner.previous();
						e.preventDefault();
						break;
					case 13: // [Enter]
					case 32: // [Space]
					case 34: // [PgDn]
					case 39: // [->]
						eisner.next();
						e.preventDefault();
						break;
					case 36: // [Home]
						eisner.first();
						e.preventDefault();
						break;
					case 35: // [End]
						eisner.last();
						e.preventDefault();
						break;
				}
			})
		}
	};
</script>

<style scoped>
	.page {
		position: absolute;
		top: 0;
	}

	.page img {
		height: 100%;
	}

	.single-page {
		width: 100%;
		text-align: center;
	}

	.page-left, .page-right {
		width: 50%;
		height: 100%;
	}

	.page-left {
		left: 0;
		text-align: right;
	}

	.page-right {
		left: 50%;
		text-align: left;
	}

	.continuous {
		text-align: center;
		width: 100%;
	}

	.continuous img {
		max-width: 100%;
	}

	.thumbs-gallery {
		position: absolute;
		left: 5%;
		top: 5%;
		width: 90%;
		text-align: center;
	}

	.thumbnail {
		display: inline;
	}

	footer {
		position: fixed;
		top: calc(100% - 50px);
		left: 0;
		height: 50px;
		width: 100%;
	}

	footer div {
		visibility: hidden;
		background-color: #000;
		width: 100%;
		padding: 20px;
	}

	footer:hover div {
		visibility: visible;
	}

	footer div button {
		background-color: transparent;
	}

	.thumbnail {
		margin: 10px;
		width: 100px;
		text-align: center;
		vertical-align: middle;
	}

	progress {
		-webkit-appearance: none !important;
		-moz-appearance: none;
		appearance: none;
		border: none;
		vertical-align: medium;
		background-color: #111;
		color: #E12; /* IE only */
	}

	progress::-webkit-progress-bar {
		background-color: #111;
	}

	progress::-webkit-progress-value {
		background-color: #E12;
	}

	progress::-moz-progress-bar {
		background-color: #E12;
	}

	/** SCROLLBAR **/
	body::-webkit-scrollbar {
		width: 10px;
	}

	body::-webkit-scrollbar-track {
		background: transparent;
	}

	body::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 10px;
	}
</style>