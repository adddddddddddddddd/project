import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={handleNameChange}
                className="w-full bg-background2 rounded-lg px-4 py-3 focus:outline-none
                           focus:ring-[1px] focus:ring-secondary border-[1px] border-primary focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={handleEmailChange}
                className="w-full bg-background2 rounded-lg px-4 py-3 focus:outline-none
                           focus:ring-[1px] focus:ring-secondary border-[1px] border-primary focus:border-secondary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              onChange={handleMessageChange}
              className="w-full bg-background2 rounded-lg px-4 py-3 focus:outline-none
                           focus:ring-[1px] focus:ring-secondary border-[1px] border-primary focus:border-secondary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-text px-8 py-3 rounded-lg font-medium
                     hover:bg-secondary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
