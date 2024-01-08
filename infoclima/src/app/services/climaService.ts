'use server';
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

interface AlertaClimatico {
    _id: ObjectId,
    id: number,
    cod: number,
    url: string,
    id_condicao_severa: number,
    data_inicio: string,
    data_fim: string,
    hora_inicio: string,
    hora_fim: string,
    municipios: string,
    microrregioes: string[],
    mesorregioes: string[],
    estados: string[],
    regioes: string[],
    riscos: string,
    geocodes: string[],
    descricao: string,
    aviso_cor: string,
    id_severidade: number,
    severidade: string,
    instrucoes: string,
    icone:string
}

const uri = process.env.MONGODB_URI ?? "";
const dbName = process.env.MONGODB_DB;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function obter_alerta_por_cidade(cidade: string, uf: string) {
    var conn = await client.connect();

    if (conn) {
        var database = conn.db(dbName);
        var clima = database.collection("Clima");
        var alerta = await clima.findOne<AlertaClimatico>({ 'municipios': { $regex: cidade + " - " + uf } })
        conn.close();

        return alerta;
    }

    console.log("Não foi possível realizar a conexão.");
}

export async function obter_alerta(id: number) {

    var conn = await client.connect();

    if (conn) {
        var database = conn.db(dbName);
        var clima = database.collection("Clima");
        var alerta = await clima.findOne<AlertaClimatico>({ 'id_condicao_severa': 24 })
        conn.close();

        return alerta;
    }

    console.log("Não foi possível realizar a conexão.");

}