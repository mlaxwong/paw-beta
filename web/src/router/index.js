import Vue from 'vue'
import Router from 'vue-router'
import publicRoute from './public'
import authRoute from './auth'
import dashboardRoute from './dashboard'
import store from '@/store'

Vue.use(Router);

const router = new Router({
	// hashbang: false,
	base: process.env.PATH_VUE_PUBLIC,
	mode: 'history',
    routes: [
		... publicRoute,
		... authRoute,
		... dashboardRoute,
	]
});

router.beforeEach((to, from, next) => {
	const metaRules = to.meta.rules;
	const rules = metaRules ? metaRules : 'authed';
	const authStore = store.state.auth;
	const loggedIn = authStore.user;

	const loginPath = '/login';
	const dashboardPath = '/dashboard';

	switch (rules)
	{
		case 'authed': {
			if (!loggedIn) {
				return next({
					path: loginPath,
					query: { redirect: to.fullPath }
				})
			} else {
				return next();
			}
		}
		case 'guest': {
			if (loggedIn) {
				return next({path: dashboardPath})
			} else {
				return next();
			}
		}
		case 'all': {
			return next();
		}
		default: {
			return;
		}
	}
	// next({
	// 	path: '/auth/login',
	// 	query: { redirect: to.fullPath }
	// })
});

export default router;