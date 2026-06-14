function ClienteList({ clientes, setClientes, busca }) {

  const excluirCliente = (id) => {
    const novaLista = clientes.filter(
      (cliente) => cliente.id !== id
    );

    setClientes(novaLista);
  };

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  if (clientesFiltrados.length === 0) {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      <p>Nenhum cliente encontrado.</p>
    </div>
  );
}

  return (
    <div>
      <h2>Lista de Clientes</h2>

      {clientesFiltrados.map((cliente) => (
        <div key={cliente.id} className="cliente-card">
          <h3>{cliente.nome}</h3>
          <p>📧 {cliente.email}</p>
          <p>📱 {cliente.telefone}</p>

          <button onClick={() => excluirCliente(cliente.id)}>
            Excluir
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ClienteList;