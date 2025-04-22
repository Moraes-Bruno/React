import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function RootLayout(){
    return(
        <div>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default RootLayout