import { Link } from "react-router";


const Navbar = () => {
  return (
    <>
      <Link to="/" >HomePage</Link>
      <Link to="/dashboard" >Dashboard</Link>
    </>
  );
}

export default Navbar;

