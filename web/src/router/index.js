import Vue from 'vue'
import Router from 'vue-router'
import authRoute from './auth';
import dashboardRoute from './dashboard';

Vue.use(Router);

const router = new Router({
	// hashbang: false,
	base: process.env.PATH_VUE_PUBLIC,
	// mode: 'history',
    routes: [
		... authRoute,
		... dashboardRoute,
	]
});

router.beforeEach((to, from, next) => {
	const metaRules = to.meta.rules;
	const rules = metaRules ? metaRules : 'authed';

	const loginPath = '/login';
	const dashboardPath = '/dashboard';

	switch (rules)
	{
		case 'authed': {
			return next({
				path: loginPath,
				query: { redirect: to.fullPath }
			})
		}
		case 'guest': {
			return next();
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