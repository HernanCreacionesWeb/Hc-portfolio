import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contacto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Contacto = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_9iidu1n', 'template_qa4haq7', form.current, 'PHWpnDkO3Jo6taZbr')
        .then(
          () => {
            console.log('SUCCESS!');
            setMessage('Gracias por comunicarte. Responderé pronto.');
            setShowModal(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setMessage('Error al enviar el mensaje');
            setShowModal(true);
          }
        );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-0 pt-4">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 className="mt-0">Contacto</h1>
        <h5>Comunicate dejando tus datos o a través de mis redes.</h5>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-2">
            <label htmlFor="exampleFormControlInput1" className="form-label letters">Nombre / Empresa</label>
            <input type="text" name="user_name" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleFormControlInput2" className="form-label letters">Correo electrónico:</label>
            <input type="email" name="user_email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleFormControlTextarea1" className="form-label letters">Mensaje</label>
            <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows={3}></textarea>
          </div>
          <input type="submit" value="Enviar" className="btn btn-primary mt-2" />
        </form>

        {/* Modal */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mensaje enviado</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p className="message-text">{message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
    </div>
  );
};