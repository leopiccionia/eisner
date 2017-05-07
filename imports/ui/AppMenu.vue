<template>
	<nav class="navbar navbar-default navbar-static-top" placement="top">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-menu-collapse" aria-expanded="false">
				&#9776;
			</button>
			<router-link class="navbar-brand" to="/">Eisner</router-link>
		</div>

		<div id="app-menu-collapse" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li><router-link to="add">Add</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		ready: () => {

		}
	};
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
</style>