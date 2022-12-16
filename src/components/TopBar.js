import { Navbar,Container,Card} from "react-bootstrap"
import {FaUserCircle} from "react-icons/fa";
    function TopBAr() {
    return (
        
        <Card.Header style={{textAlign:"right"}}>Nama <span style={{marginLeft:"30px",margin:"30px"}}><FaUserCircle/></span></Card.Header>
    
    )
}

export default TopBAr