import { NavLink, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <header>
      <h1>Disco Fighter</h1>
      <nav>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/live">Live</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      
    </header>
    <Outlet />
    </>
    
  );
};
export default Nav;
