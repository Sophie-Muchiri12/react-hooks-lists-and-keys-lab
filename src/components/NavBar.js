import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linking = links.map((link,index)=>{
    return <a key={index} href={`#${link}`}>{link}</a>
  })
  return (<nav>
    {linking}
  </nav>)
}

export default NavBar;
