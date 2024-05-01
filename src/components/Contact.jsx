import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmiv59s",
        "template_b6xtgki",
        form.current,
        "LwXrEPgoNtnbxAWnS"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setIsSent(true);
        resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const resetForm = () => {
  form.current.reset();
};

return (
    <div>
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-info">N'hésitez pas à me contacter via ce formulaire</h3>
    {isSent ? (
      <div className="btn-info-container">
        <p>Le message est bien arrivé à destination !</p>
        <button className="btn-info" onClick={() => setIsSent(false)}>Besoin d'informations supplémentaires ?</button>
      </div>
    ) : (
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" />
      </form>
    )}
  </div>
);
};

export default Contact;