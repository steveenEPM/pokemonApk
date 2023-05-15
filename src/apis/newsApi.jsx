import axios from "axios"

/**
 * 
 * Api de noticias
 */
const newsApi = ()=>{

    const instancia = axios({
        method:"get",
        url:"https://newsapi.org/v2/everything?q=Pokemon&language=es&apiKey=f3798e116eb342b2bae58e7f0cbd9c11",
        timeout:72000
    })

    return instancia
}

export default newsApi

