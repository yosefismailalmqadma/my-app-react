import Header from "../../components/Header/Header";
import "./Contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import watsappimg from "../../../public/img/QrWats.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1wjl4oq', 'template_8px90hy', form.current, 'rISUeLZOabFy0xjWj')
            .then((result) => {
                console.log('Success:', result);
                toast.success('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.error('Error:', error);
                toast.error(`Failed to send message: ${error.text}`);
            });
    };

    return (
      <>
        <Header />
        <Toaster position="top-center" />
        <div className="contact">
          <div className="container">
            <h1 className="page-title">Contact Me</h1>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit" className="find-mail-btn">
                  Send Mail
                </button>
              </form>
              <div className="contact-info">
                <div className="contacti">
                  <div className="iconts">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contacti-content">
                    <h1 className="info-title">Phone</h1>
                    <p className="info-text">+20 1099073661</p>
                    <p className="info-text">+972598186900</p>
                  </div>
                  <div className="Qr">
                    <img src={watsappimg} alt="WhatsApp QR Code" />
                  </div>
                </div>
                <div className="contacti">
                  <div className="iconts">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contacti-content">
                    <h1 className="info-title">Email</h1>
                    <p className="info-text">yosefismail904@gmail.com</p>
                  </div>
                </div>
                <div className="contacti">
                  <div className="iconts">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contacti-content">
                    <h1 className="info-title">Address</h1>
                    <p className="info-text">Palestine, Gaza</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Contact;