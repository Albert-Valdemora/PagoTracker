// import Swal from "sweetalert2";
// import { fetchConToken } from "../components/helpers/fetch";
// import { prepareEvents } from "../components/helpers/prepareEvents";
// import { types } from "../types/types"



// //Añadir eventos
// export const eventStartAddNew = (event) => {
//   return async(disptch, getState) => {

//     const {uid, name} = getState().auth;

//     const resp = await fetchConToken('events', event, 'POST');
//     const body = await resp.json();

//   try {

//     if (body.ok) {

//       event.id = body.evento.id;
//       event.user = {
//         _id: uid,
//         name: name
//       }

//       console.log(event);
      
//       disptch(eventAddNew(event))  
//     }

//   } catch (error) {
//     console.log(error);
    
//   }
    
    
//   }
// }
// const eventAddNew = (event) => ({
//   type: types.eventAddNew,
//   payload: event
// });



// export const eventSetActive = (event) => ({
//   type: types.eventSetActive,
//   payload: event
// });
// export const eventClearActiveEvent = () => ({type: types.eventClearActiveEvent})



// //Actualizar evento
// export const eventStartUpdated = (event) => {
//   return async(disptch) => {

//     try {
      
//       const resp = await fetchConToken(`events/${event.id}`, event, 'PUT' );
//       const body = await resp.json();

//       if (body.ok) {
//         disptch( eventUpdated(event) );
//       }else{
//         Swal.fire('Error', body.msg, 'error');
//       }

//     } catch (error) {
//       console.log(error);
      
//     }

//   }
// }
// const eventUpdated = (event) => ({
//   type: types.eventUpdated,
//   payload: event
// })



// //Borrar eventos
// export const eventStartDelete = () => {
//   return async(disptch, getState) => {

//     const { id } = getState().calendar.activeEvent;

    
//     try {
      
//       const resp = await fetchConToken(`events/${id}`, {}, 'DELETE' );
//       const body = await resp.json();

//       if (body.ok) {
//         disptch( eventDeleted() );
//       }else{
//         Swal.fire('Error', body.msg, 'error');
//       }

//     } catch (error) {
//       console.log(error);
      
//     }

//   }
// }
// const eventDeleted = () => ({
//   type: types.eventDeleted
// })




// //Mostrar eventos de la bd
// export const eventStartLoading = () => {
//   return async(disptch) => {
  
//     try {
      
//       const resp = await fetchConToken('events');
//       const body = await resp.json();

//       const events = prepareEvents( body.eventos );
  
//       disptch( eventLoaded( events ))

      
//     } catch (error) {
//       console.log(error);
      
//     }
    
//   }
// }
// const eventLoaded = (events) => ({
//   type: types.eventLoaded,
//   payload: events
// })



// export const eventLogout = () => ({type: types.eventLogout})