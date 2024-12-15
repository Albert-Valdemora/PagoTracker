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
            ["Dashboard", "fa-solid fa-user-plus"],
            ["Restautant’s", "fa-solid fa-envelope"],
            ["Manage User’s", "fa-solid fa-book"],
            ["Manage Order’s", "fa-solid fa-gear"],
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
