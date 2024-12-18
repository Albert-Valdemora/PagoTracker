import { useState } from 'react'
import { Link } from 'react-router';

export const Nabvar = ({li = []}) => {

  const [nabvarV, setNabvarV] = useState(true)

  let openClose = () => {
    if (nabvarV === false) {
      setNabvarV(true);
    } else {
      setNabvarV(false);
    }
  }

  return (
    <nav className="navbar-menu" style={{ width: nabvarV === false ? 250 : 60 }}>
       <div className="burger" onClick={() => openClose()}>
         <i class="fa-solid fa-bars"  style={{fontSize: '28px', margin: nabvarV ?'0 auto' :'0' }}></i>
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box flex items-center gap-3" key={i}>
            <i class={item[1]} style={{ paddingLeft: nabvarV === false ? 27 : 17, width: nabvarV === true ?'35px' : '43px'}}></i>
            <Link
              className="navbar__li"
              style={{ display: nabvarV === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </Link>
          </div>
        ))}
      </ul>
   
    </nav>
  )
}