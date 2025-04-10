import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"

function RootLayout(){
    return(
        <div>
            <NavBar/>
            <div className="container">
                 <Outlet/>
            </div>
           
        </div>
    )
}

export default RootLayout