import React from "react";
import { Nabvar } from "../menuVertical/Nabvar";
import { NabvarH } from "../menuHorizotal/NabvarH";
import { CardEstilizada } from "../Card/CardEstilizada";
import { TotalCliente } from "../graficos/TotalCliente";
import TablaCliente from "../tabla/TablaCliente";

export const PagoTrackerScreen = () => {

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

      <main >
        <NabvarH />

      <section className="app-section-container">
       
       <h1 className="text-3xl my-5 font-bold">Dashboard</h1>

        <div className="app-container-card">
        <CardEstilizada info={[
          ["Cantida de consulta", "200", "0.43%"],
          ["Nuevos Odontologos por mes", "1340", "4.43%"],
          ["Nuevos Odontologos por mes", "1340", "4.43%"],
          ["Nuevas citas", "200", "2.59%"]
        ]}/>
        </div>
      </section>


      <section className="app-section-container mt-[70px]">
       
       {/* <h1 className="text-3xl my-5 font-bold">Graficas</h1> */}

        <TotalCliente />
      </section>


      {/* <section className="app-section-container mt-[120px] custom-shadow rounded-lg p-5"> */}
      <section className="app-section-container mt-[120px]">
       
        {/* <h1 className="text-3xl my-5 font-bold">Tablas</h1> */}


        <TablaCliente />
      </section>

      </main>
       
    </div>
  );
};
