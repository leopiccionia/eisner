var eisner = new Vue({
	el: '#eisner',
	data: {
		title: 'Baseball Comics',
		edition: 1,
		page: 1,
		max_page: 32,
		mode: 'single',
		thumbs_shown: false
	},
	computed: {
		current_page: function(n){
			if(this.mode == 'double')
				return Math.max(this.page, 1)
			return this.page
		}
	},
	methods: {
		/* NAVIGATION */
		first: function(){
			if(this.mode == 'double')
				this.page = 0
			else
				this.page = 1
		},
		last: function(){
			if(this.mode == 'double' && this.max_page % 2 == 1)
				this.page = this.max_page - 1
			else
				this.page = this.max_page
		},
		previous: function(){
			if(this.mode == 'double')
				this.page = Math.max(this.page - 2, 0)
			else
				this.page = Math.max(this.page - 1, 1)
		},
		next: function(){
			if(this.mode == 'double')
				this.page = Math.min(this.page + 2, this.max_page)
			else
				this.page = Math.min(this.page + 1, this.max_page)
		},
		goto_page: function(n){
			if(this.mode == 'double' & n % 2 == 1)
				this.page = n - 1
			else
				this.page = n
			this.thumbs_shown = false
		},
		/* VIEW MODE */
		single_page: function(){
			this.mode = 'single'
			if(this.page == 0)
				this.page = 1
		},
		double_page: function(){
			this.mode = 'double'
			if(this.page %2 == 1)
				this.page -= 1
		},
		thumbs: function(){
			this.thumbs_shown = !(this.thumbs_shown)
		},
		/* UTILS */
		to_url: function(n){
			if(n < 10)
				n = '0' + n
			return 'img/baseball-comics-001/' + n + '.jpg'
		}
	},
	created: function(){
		window.addEventListener('keydown', function(e){
			var key = e.which || e.keyCode
			switch(key){
				case 33: // [PgUp]
				case 37: // [<-]
					eisner.previous()
					e.preventDefault()
					break
				case 13: // [Enter]
				case 32: // [Space]
				case 34: // [PgDn]
				case 39: // [->]
					eisner.next()
					e.preventDefault()
					break
				case 36: // [Home]
					eisner.first()
					e.preventDefault()
					break
				case 35: // [End]
					eisner.last()
					e.preventDefault()
					break
			}
		})
	}
})

document.title = eisner.title + ' #' + eisner.edition