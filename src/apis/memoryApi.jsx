import axios from "axios";

const memoryApi = (value)=>{

    const instancia = axios({
        method:"get",
        url:`get?q=${value}!&langpair=en|es`,
        baseURL:"https://api.mymemory.translated.net/",
    })

    return instancia
}

export default memoryApi