<template>
	<div>
		<demo-mobile></demo-mobile>
		<demo-desktop></demo-desktop>
	</div>
</template>

<script>
	import DemoDesktop from '/imports/ui/DemoDesktop.vue';
	import DemoMobile from '/imports/ui/DemoMobile.vue';

	export default {
		components: {
			DemoDesktop,
			DemoMobile
		}
	}
</script>

<style scoped>
	@media screen and (max-width: 699px) {
		.mobile-display {
			display: initial;
		}

		.desktop-display {
			display: none;
		}
	}

	@media screen and (min-width: 700px) {
		.mobile-display {
			display: none;
		}

		.desktop-display {
			display: initial;
		}
	}
</style>