<template>
	<nav class="navbar navbar-default navbar-static-top" placement="top">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-menu-collapse" aria-expanded="false">
				<i class="glyphicon glyphicon-menu-hamburger"></i>
			</button>
			<router-link class="navbar-brand" to="/">
				<img src="/img/icon_transparent.svg"/>
			</router-link>
		</div>

		<div id="app-menu-collapse" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li><router-link to="add">Add</router-link></li>
				<li><router-link to="demo">Demo</router-link></li>
			</ul>
		</div>
	</nav>
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