import { useEffect, useState } from "react";
import ClienteForm from "../components/ClienteForm";
import ClienteList from "../components/ClienteList";

function Home() {
  const [clientes, setClientes] = useState(() => {
    const clientesSalvos = localStorage.getItem("clientes");

    return clientesSalvos
      ? JSON.parse(clientesSalvos)
      : [];
  });

  const [busca, setBusca] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "clientes",
      JSON.stringify(clientes)
    );
  }, [clientes]);

  return (
    <div className="container">
      <h1>CRM DE CLIENTES   </h1>

      <ClienteForm
        clientes={clientes}
        setClientes={setClientes}
      />

      <input
        type="text"
        placeholder="Buscar cliente..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <ClienteList
        clientes={clientes}
        setClientes={setClientes}
        busca={busca}
      />
    </div>
  );
}

export default Home;