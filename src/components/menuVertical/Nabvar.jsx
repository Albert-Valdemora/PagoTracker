import React, { useState } from 'react'

export const Nabvar = ({li}) => {

  const [nabvarV, setNabvarV] = useState(false)

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
        <img src="img/bars-solid.svg"  style={{width: '30px', margin: nabvarV ?'0 auto' :'0' }} alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: nabvarV === false ? 27 : 17, width: nabvarV === true ?'35px' : '43px'}}
            />
            <li
              className="navbar__li"
              style={{ display: nabvarV === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  )
}