import Layout from './../_layouts/CP.layout'
import defaultRouter from './_Default/_route'
import serviceRouter from './Service/_route'

export default {
    path: '/dashboard',
    component: Layout,
    children: [
        defaultRouter,
        serviceRouter
    ]
}