'use server';

export async function obter_alerta(id: number) {
    var response = await fetch("https://apiprevmet3.inmet.gov.br/aviso/getByID/" + id)
    var alerta = await response.json();
    return alerta;
}