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


    <div className="header">
      <h1>CRM de Clientes</h1>
      <span>Gerenciamento de Clientes</span>
    </div>


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

<p className="contador">
  Total de clientes: {clientes.length}
</p>

<ClienteList
  clientes={clientes}
  setClientes={setClientes}
  busca={busca}
/>
    </div>
  );
}

export default Home;