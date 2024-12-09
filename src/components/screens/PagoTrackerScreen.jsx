import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Nabvar } from "../menuVertical/Nabvar";

export const PagoTrackerScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div style={{display: 'flex', gap: '24px'}}>
      <header>
        <Nabvar  li={[
        ["Dashboard", "img/user-plus-solid.svg"],
        ["Restautant’s", "img/calendar-days-solid.svg"],
        ["Manage User’s", "img/clipboard-regular.svg"],
        ["Manage Order’s", "img/notes-medical-solid.svg"]
      ]}/>
      </header>
      

      <main>
      <button className="btn btn-primary mt-5" onClick={handleLogout}>Logout</button>

      </main>

      
    </div>
  );
};
