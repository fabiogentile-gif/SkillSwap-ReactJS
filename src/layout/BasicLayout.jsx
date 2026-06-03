import { Outlet } from 'react-router-dom'


import NavBar from './../components/NavBar'
import Footer from './../components/FooterBox'

export default function BasicLayout(){
    return(
        <>
        <NavBar />
        <main>
        <Outlet />
        </main>
        <Footer />
        </>
    )


}