
import { Routes,Route } from 'react-router'
import AboutPage from './about'
import ContactPage from './Contact'
import Home from './Home'
import Dashboard from './Dashboard'
import Settings from './Settings'
import Members from './Members'
import Rewards from './Rewards'
import ProductPage from './products'


function RoutesPage() {
  return (
    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='members' element={<Members/>}></Route>
            <Route path='rewards' element={<Rewards/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
        </Route>
        <Route path='/products' element={<ProductPage/>}></Route>
    </Routes>
  )
}

export default RoutesPage