<template lang="pug">
.app-layout
	app-menu
	.wrapper
		router-view
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