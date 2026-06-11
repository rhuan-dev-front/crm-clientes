import { useState } from "react";

function ClienteForm({ clientes, setClientes }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoCliente = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };

    setClientes([...clientes, novoCliente]);

    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Cliente</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">
        Salvar Cliente
      </button>
    </form>
  );
}

export default ClienteForm;