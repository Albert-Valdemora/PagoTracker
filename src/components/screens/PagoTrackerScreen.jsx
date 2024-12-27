import React from "react";
import { CardEstilizada } from "../Card/CardEstilizada";
import { TotalCliente } from "../graficos/TotalCliente";
import TablaCliente from "../tabla/TablaCliente";

export const PagoTrackerScreen = () => {
  return (
    <>
      
        <section className="app-section-container">
          <h1 className="text-3xl my-5 font-bold">Dashboard</h1>

          <div className="app-container-card">
            <CardEstilizada
              info={[
                ["Cantida de consulta", "200", "0.43%"],
                ["Nuevos Odontologos por mes", "1340", "4.43%"],
                ["Nuevos Odontologos por mes", "1340", "4.43%"],
                ["Nuevas citas", "200", "2.59%"],
              ]}
            />
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
      
   </>
  );
};
