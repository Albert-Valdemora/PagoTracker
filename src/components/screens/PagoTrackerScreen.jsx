import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Nabvar } from "../menuVertical/Nabvar";
import { NabvarH } from "../menuHorizotal/NabvarH";
import {useTheme} from "@nextui-org/use-theme";

export const PagoTrackerScreen = () => {

  const { theme, setTheme } = useTheme()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="app-container" style={{ display: "flex", gap: "" }}>
      <header>
        <Nabvar
          li={[
            ["Dashboard", "img/user-plus-solid.svg"],
            ["Restautant’s", "img/calendar-days-solid.svg"],
            ["Manage User’s", "img/clipboard-regular.svg"],
            ["Manage Order’s", "img/notes-medical-solid.svg"],
          ]}
        />
      </header>

      <main>
        <NabvarH />
        <button className="btn btn-primary mt-5" onClick={handleLogout}>
          Logout
        </button>

        <div className="flex gap-4">
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      </main>
    </div>
  );
};
