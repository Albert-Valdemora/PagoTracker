// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// // import { Navbar } from '../ui/Navbar';
// import { messages } from '../helpers/calendar-message';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'moment/locale/es';
// import { CalendarEvent } from './CalendarEvent';
// import { CalendarModal } from './CalendarModal';
// import { useDispatch, useSelector } from 'react-redux';
// // import {uiOpenModal} from '../../actions/ui'
// import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
// import { AddNewFab } from '../ui/AddNewFab';
// import { DeleteEventFab } from '../ui/DeleteEventFab';

// moment.locale('es');
// const localizer = momentLocalizer(moment);

// export const CalendarScreen = () => {

//   const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');
//   const { events, activeEvent  } = useSelector(state => state.calendar)
//   const { uid } = useSelector(state => state.auth)

//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(eventStartLoading() );
//   // }, [dispatch])

//   //Evento para mostrar la informacion cuando haga doble click
//   // const onDoubleClick = (e) => {
//   //   // dispatch(uiOpenModal())
//   // }

//   //Evento para mostrar la informacion cuando haga click
//   // const onSelectEvent = (e) => {
//   //   dispatch(eventSetActive(e))
//   // }

//   //Evento para guardar la utima vista (digase mes, semana, dia, etc)
//   const onViewChange = (e) => {
//     setlastView(e);
//     localStorage.setItem('lastView', e);

//   }

//   //Para limpiar la nota activa
//   // const onSelectSlot = (e) => {
//   //   dispatch(eventClearActiveEvent())
//   // }

//   const eventStyleGetter = (event, start, end, idSelected) =>{

//     const style = {
//       backgroundColor: (uid === event.user._id) ?'#367CF7' : '#464660',
//       borderRadius: '0px',
//       opacity: 0.8,
//       display: 'block',
//       color: 'white'
//     }

//     return {
//       style
//     }

//   };

//   return (
//     <div className='calendar-screen'>
//       {/* <Navbar /> */}

//        <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         messages={messages}
//         eventPropGetter={eventStyleGetter}
//         // onDoubleClickEvent={onDoubleClick}
//         // onSelectEvent={onSelectEvent}
//         onView={onViewChange}
//         // onSelectSlot={onSelectSlot}
//         selectable={true}
//         view={lastView}
//         components={{
//           event: CalendarEvent
//         }}
//       />

//       <AddNewFab />

//       {
//         (activeEvent) && <DeleteEventFab />
//       }

//       <CalendarModal/>

//     </div>
//   )
// }

import moment from "moment";
import "moment/locale/es";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as NextUICalendar } from "@nextui-org/react";
import { today } from "@internationalized/date";
import React, { useState } from "react";

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  // Día seleccionado en el calendario pequeño
  const [selectedDate, setSelectedDate] = useState(today()); // Fecha actual como valor inicial
  const [events, setEvents] = useState([]); // Lista de eventos agendados
  
  

  // Manejar la selección de una fecha en el calendario pequeño
  const handleDateChange = (date) => {
    setSelectedDate(date); // Actualiza la fecha seleccionada
  };

  // Manejar la adición de un evento
  const handleAddEvent = () => {
    if (selectedDate) {
      const localDate = new Date(selectedDate.toString()); // Convierte a formato Date
      localDate.setHours(24); // Ajusta la hora para evitar problemas de zonas horarias

      const newEvent = {
        title: "Nueva Cita",
        start: localDate, // Usa la fecha local ajustada
        end: localDate,
      };

      // Actualizar la lista de eventos y mostrar en consola
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      console.log("Eventos registrados:", updatedEvents);
    }
  };

  return (
    <>
      <div className="flex p-8 gap-8">
        {/* Calendario pequeño */}
        <div className="w-[300px] my-0 mx-auto flex flex-col items-center gap-7">
          <button
            onClick={handleAddEvent}
            className="w-auto p-2 bg-blue-600 rounded-md text-white"
          >
            + Registrar fecha
          </button>

        
          <NextUICalendar
            aria-label="Date (Controlled)"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white"
          />
      

          <div className="w-[300px] min-h-[300px] p-5 rounded-xl shadow-2xl">
            <h2 className="font-bold">Fechas Cercanas</h2>
            <div className="flex flex-col gap-3 mt-5">
              {
              events.map((e) => (
                <div className="w-[100%] h-auto bg-slate-200 rounded-lg flex items-center p-2">
                  <div className="w-10 h-10 rounded-full bg-red-300 mr-3"></div>
                  <div className="flex flex-col">
                  <h3 >{e.title}</h3>
                  <h4 className="text-sm text-gray-500">
                    {new Date(e.start).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </h4>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>

        {/* Calendario grande */}
        <div className="my-0 mx-auto w-[70%] h-3/4">
          <Calendar
            localizer={localizer}
            events={events} // Eventos agendados
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
          />
        </div>
      </div>
    </>
  );
};
