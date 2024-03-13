import { useState } from "react";
import style from "./style.module.scss";
import { FooterComponent } from "./footerComponent";

export const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgegzpel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }

    setSubmitting(false);
  };

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h1>Entre em contato</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className={style.containerButton}>
          <button type="submit" disabled={submitting}>
            Enviar
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p className={style.successMessage}>Mensagem enviada com sucesso!</p>
      )}
      <FooterComponent />
    </div>
  );
};
