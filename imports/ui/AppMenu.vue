<template lang="pug">
nav.navbar.navbar-default.navbar-static-top(placement='top')
	.navbar-header
		button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#app-menu-collapse')
			i.glyphicon.glyphicon-menu-hamburger
		router-link.navbar-brand(to='/')
			img(src='/img/icon_transparent.svg')
	#app-menu-collapse.collapse.navbar-collapse
		ul.nav.navbar-nav
			li
				router-link(to='add') Add
			li
				router-link(to='demo') Demo
</template>

<script>
	export default {};
</script>

<style scoped>
	nav {
		background-color: #E12;
		color: #FFF;
	}

	ul.nav li a {
		color: #FFF;
	}

	ul.nav li:hover a{
		background-color: #EEE;
		color: #E12;
	}

	.navbar-brand {
		vertical-align: middle;
	}

	.navbar-brand img {
		height: 32px;
	}
</style>