import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueTouch from 'vue-touch';

import AppLayout from '/imports/ui/AppLayout.vue';
import routerFactory from '/imports/routes';

Vue.use(VueTouch, {name: 'v-touch'});

Meteor.startup(() => {
	new Vue({
		router: routerFactory.create(),
		render: h => h(AppLayout),
	}).$mount('app');
});