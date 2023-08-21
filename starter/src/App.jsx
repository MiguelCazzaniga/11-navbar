import { useState } from "react";
import { links,social } from "./data";
import Links from "./assets/links";
import Socials from "./assets/socials";
import logo from "./logo.svg"
import { FaBars } from "react-icons/fa"


const App = () => {
  const[showLinks,setShowLinks]=useState(true)
 
  const HandleShowLinks=()=>{
    const newShowLinks=showLinks
    setShowLinks(!newShowLinks)
  }
  return (
    <main>
      <nav>
        <div className="logoButton">
        <img src={logo} alt='logo' className='logo'></img>
          <button onClick={HandleShowLinks} className='navButton'>
            <FaBars />
          </button>
        </div>
        <ul  className={showLinks ? "ulLinks" : "nosee"}>
          {links.map((unLink) => {
            return <Links key={unLink.id} unLink={unLink}></Links>
          })}
        </ul>
        <ul className='ulSocials'>
          {social.map((unSocial) => {
            return <Socials key={unSocial.id} unSocial={unSocial}></Socials>
          })}
        </ul>
      </nav>
      <section>
        <h1>hola</h1>
      </section>
    </main>
  ) 
};
export default App;
