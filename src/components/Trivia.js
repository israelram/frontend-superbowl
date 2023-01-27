import React, { useState } from "react";

function Trivia() {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Lógica para verificar las respuestas y enviar un folio al correo electrónico del usuario (por ejemplo, hacer una llamada a una API)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pregunta 1:
        <input type="text" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
      </label>
      <label>
        Pregunta 2:
        <input type="text" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
      </label>
      <label>
        Pregunta 3:
        <input type="text" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
      </label>
      <button type="submit">Enviar respuestas</button>
    </form>
  );
}

export default Trivia;
