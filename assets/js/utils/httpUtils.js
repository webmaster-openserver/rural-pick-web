// httpUtils.js

export async function callService(verb, url, bodyRequest, bodyForm) {
    try {
        const response = await fetch(url);
        if(!response.ok) 
            throw new Error(`Error HTTP: ${response.status}`)

        return response.json;
    } catch (error) {
        console.error(`Error al obtener datos;`);
    }
}