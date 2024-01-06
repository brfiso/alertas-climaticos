import { obter_alerta } from "./services/climaService";

export default async function Home() {
  var alerta = await obter_alerta(46023);
  return (
    <main className="container">
      <div><h1>Alertas</h1></div>
      <hr />
      <h4>
        {alerta.descricao}
        <i className="fa-solid fa-cloud-showers-heavy"></i>
      </h4>
      {alerta.severidade}
      {alerta.riscos}
      {alerta.data_inicio}
      {alerta.data_fim}
      {alerta.hora_inicio}
      {alerta.hora_fim}
      {alerta.municipios}

      {alerta.microrregioes}
      {alerta.estados}
      {alerta.regioes}
      {alerta.regioes}
      {alerta.instrucoes}

    </main>
  )
}
