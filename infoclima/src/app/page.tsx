import { obter_alerta, obter_alerta_por_cidade } from "./services/climaService";
import { formatDateString } from "./services/datetimeService";
import { GetIP } from "./services/ipService";

export default async function Home() {
  var ip = await GetIP();
  var alerta = await obter_alerta_por_cidade(ip.geoplugin_city, ip.geoplugin_regionCode);
  var cidade = ip.geoplugin_city + " - " + ip.geoplugin_regionCode;
  return (
    <main className="container">
      <div><h1 className="text-primary">
        <i className={alerta?.icone}></i>
        <span className="px-2">{alerta?.descricao}</span>
      </h1></div>
      <hr />
      <h4>
        <span>
          {alerta?.severidade}
        </span>
      </h4>
      <div className="row">
        <div className="col-md-8">
          <div className="card my-4">
            <div className="card-body">
              <h4>Data e Horário</h4>
              <div className="p-2">
                <div className="row mb-2">
                  <span className="col-md-2">Início: </span><b className="col">{formatDateString(alerta?.data_inicio ?? "")} - {alerta?.hora_inicio}</b>
                </div>
                <div className="row">
                  <span className="col-md-2">Fim: </span><b className="col">{formatDateString(alerta?.data_fim ?? "")} - {alerta?.hora_fim}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              <h4>Riscos</h4>
              <div className="p-2">
                {alerta?.riscos.replace("['", "").replace("']", "")}
              </div>
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              <h4>Instruções</h4>
              <div className="p-2">
                {alerta?.instrucoes.replace("['", "").replace("']", "")}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">

          <div className="card my-4">
            <div className="card-body">
              <h4>Municípios Afetados</h4>
              <p className="text-muted">
                <span className="badge badge-secondary bg-secondary">{cidade}</span> e mais {alerta?.municipios.split(",").length} municípios.
              </p>
              <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Ver todos</button>
              <div className="p-2  collapse" id="collapseExample">
                {alerta?.municipios.split(",").map((municipio) => <p className={municipio.trim() == cidade.trim() ? "bg-success p-5" : ""}>{municipio.split('(')[0].trim()}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}