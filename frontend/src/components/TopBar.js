import { Navbar,Container,Card} from "react-bootstrap"
import {FaUserCircle} from "react-icons/fa";
    function TopBAr() {
    return (
        
        <Card.Header style={{textAlign:"right",backgroundColor:"#ffff",width:"100%",position:"top",position:"fixed",zIndex:"9"}}>Nama <span style={{marginLeft:"30px",margin:"30px",}}><FaUserCircle/></span></Card.Header>
    
    )
}

export default TopBAr