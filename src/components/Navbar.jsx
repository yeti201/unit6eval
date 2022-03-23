import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    // map through the link ad display it in header
    <div className="navbar">
      {links.map((link, index) =>{
        return <NavLink key={index}
                to={link.link}
                style = {({isActive}) => ({
                  color: isActive? "red":"black", textDecoration: "none", padding: "20px"
                })}
              ><h2>{link.title}</h2>

        </NavLink>

      } )}
    </div>
  )
    
  
};
