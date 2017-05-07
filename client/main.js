import {Meteor} from 'meteor/meteor';
import Vue from 'vue';

import AppLayout from '/imports/ui/AppLayout.vue';
import routerFactory from '/imports/routes';

Meteor.startup(() => {
	new Vue({
		router: routerFactory.create(),
		render: h => h(AppLayout),
	}).$mount('app');
});