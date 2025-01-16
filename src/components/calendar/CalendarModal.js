import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
// import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

// import 'react-datetime-picker/dist/DateTimePicker.css';
import { useDispatch, useSelector } from 'react-redux';
// import { uiCloseModal } from '../../actions/ui';
import {  eventClearActiveEvent, eventStartAddNew, eventStartUpdated } from '../../actions/events';


//valor inicial para que el usuario pueda elegir la hora a partir de esta
const now = moment().minute(0).second(0).add(1, 'hours');

//valor inicial para que el usuario pueda elegir la hora a partir de la que puede finalizarla
const nowPlus1 = now.clone().add(1, 'hours');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');



const initEvent = {
  title: 'Evento',
  notes: '',
  start: now.toDate(),
  end: nowPlus1.toDate()
}

export const CalendarModal = () => {

  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state => state.ui)
  const {activeEvent} = useSelector(state => state.calendar)

  

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [titleValid, setTitleValid] = useState(true)
  const [formValues, setFormValues] = useState(initEvent);


  const  { notes, title, start, end} = formValues

  
  useEffect(() => {
    
    if(activeEvent){
      setFormValues(activeEvent);
    }else{
      setFormValues(initEvent)
    }

    


  }, [activeEvent, setFormValues])
  


  //Funcion para capturar las entradas de los usuarios
  const handleInpuChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  //Funcion para cerrar la modal
  const closeModal = () => {
    // dispatch(uiCloseModal()); 
    dispatch(eventClearActiveEvent())
    setFormValues( initEvent) 
  }

  //Funcion para elegir la fecha de inicio
  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e
    })
    
  }

  //Funcion para elegir la fecha de fin
  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e
    })
    
    
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const momentStart = moment(start);
    const momentEnd = moment(end);

    
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire('Error', 'La fecha de fin debe er mayor a la fecha de inicio', 'error')
    }

    if (title.trim().length < 2) {
      return setTitleValid(false)
    }


    if (activeEvent) {
      dispatch(eventStartUpdated(formValues))   
    }else{
      dispatch(eventStartAddNew(formValues));
    }

    setTitleValid(true);
    closeModal();
    
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >

      <h1> {(activeEvent) ? 'Editar evento' : 'Nuevo evento'} </h1>
      <hr />
      <form className="container" onSubmit={ handleSubmitForm }>

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          {/* <DateTimePicker onChange={ handleStartDateChange } value={dateStart} className='form-control '/> */}
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          {/* <DateTimePicker onChange={ handleEndDateChange } value={dateEnd} className='form-control' minDate={ dateStart }/> */}
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${ !titleValid && 'is-invalid'}` }
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={ handleInpuChange }
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={ handleInpuChange }
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>


    </Modal>
  )
}
