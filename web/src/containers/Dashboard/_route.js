import Layout from './../_layouts/CP.layout'
import defaultRouter from './_Default/_route'
import serviceRouter from './Service/_route'
import customerRouter from './Customer/_route'
import adminRouter from './Admin/_route'

export default {
    path: '/dashboard',
    component: Layout,
    children: [
        defaultRouter,
        serviceRouter,
        customerRouter,
        adminRouter,
    ]
}