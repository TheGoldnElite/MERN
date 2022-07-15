const Navbar = props => {
    return (
        <h1><Link to={"/about"}> About</Link> 
        |<Link to={"/contact"}> Contact</Link>
        |<Link to={"/cities"}>Cities</Link></h1>
    )
}

export default Navbar;