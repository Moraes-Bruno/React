import Contacts from "../pages/Contacts";
import { Outlet } from "react-router-dom";

function ContactLayout(){
    return(
        <div>
            <Contacts/>
            <Outlet/>
        </div>
        
    );
}

export default ContactLayout