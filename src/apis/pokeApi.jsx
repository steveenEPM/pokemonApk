import axios from "axios"
//const axios = require("axios")

const pokeApi = (url)=>{

    const instacia = axios({
        method:"get",
        url:url,
        baseURL:"https://pokeapi.co/api/v2",
        timeout:72000
    })

    return instacia

}

export default pokeApi

/*
pokeApi("/pokemon/?offset=150&limit=150").then(e =>{
    console.log(e.data.results)
}).catch(err => console.log(err))
*/

/*
pokeapi("/pokemon/80").then(e =>{

    console.log(e.data.sprites.front_default)
}).catch(err => console.log(err))
*/