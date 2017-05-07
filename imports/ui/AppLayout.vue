<template>
	<div class="app-layout">
		<app-menu></app-menu>
		<div class="wrapper">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppMenu from '/imports/ui/AppMenu.vue';

export default {
	components: {
		AppMenu
	}
};
</script>

<style scoped>
	.app-layout {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	:not(app-menu) {
		position: relative;
	}

	.wrapper{
		height: 100vh;
	}
</style>