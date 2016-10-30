var eisner = new Vue({
	el: '#eisner',
	data: {
		title: 'Baseball Comics',
		edition: 1,
		page: 0,
		max_page: 32
	},
	computed: {
		current_page: function(n){
			return Math.min(this.page + 1, this.max_page)
		}
	},
	methods: {
		first: function(){
			this.page = 0
		},
		last: function(){
			if(this.max_page % 2 == 0)
				this.page = this.max_page
			else
				this.page = this.max_page - 1
		},
		previous: function(){
			this.page = Math.max(this.page - 2, 0)
		},
		next: function(){
			this.page = Math.min(this.page + 2, this.max_page)
		},
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