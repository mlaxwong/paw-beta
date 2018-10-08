import MainLayout from './../_layouts/Main.layout'
import HomeContainer from './'
export default{
    path: '',
    component: MainLayout,
    children: [
        {
            path: '',
            component: HomeContainer,
        }
    ]
};