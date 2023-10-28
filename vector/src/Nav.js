import { Link } from "react-router-dom"
let Nav=()=>{
    
    return(
        <nav>
            <div className="nav-left">
                <h1>Products</h1>
                <Link to="/" className="link">Home</Link>
            </div>
            <div className="nav-search">
                <i className="fa-solid fa-magnifying-glass search" ></i>
                <input type="text" placeholder="Search    " className="nav-input"/>
            </div>
            <div className="nav-right">
                <Link to="/signup" className="link1">Signup</Link>
                <Link to="/login" className="link1">Login</Link>
                <Link to="/cart" className="link1">Cart</Link>
            </div>
        </nav>
    )
}
export default Nav