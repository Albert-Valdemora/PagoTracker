import { useState } from 'react'
import { Link } from 'react-router';

export const Nabvar = ({navigation = []}) => {

  const [nabvarV, setNabvarV] = useState(false)

  let openClose = () => {
    setNabvarV(!nabvarV);
  }

  return (
    <nav className="navbar-menu" style={{ width: nabvarV === false ? 250 : 60 }}>
       <div className="burger" onClick={() => openClose()}>
         <i class="fa-solid fa-bars"  style={{fontSize: '28px', margin: nabvarV ?'0 auto' :'0' }}></i>
      </div>
      <ul className="navbar__list">
        {navigation.map((item) => (
          <div className="navbar__li-box flex items-center gap-3" key={item.href}>
            <i class={item.icon} style={{ paddingLeft: nabvarV === false ? 27 : 17, width: nabvarV === true ?'35px' : '43px'}}></i>
            <Link
              className="navbar__li"
              style={{ display: nabvarV === false ? "inline-block" : "none" }}
              to={item.href}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </ul>
   
    </nav>
  )
}