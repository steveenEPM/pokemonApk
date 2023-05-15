import pokeApi from "../apis/pokeApi"


const colores = [
    {
        name: "aliceblue",
        rgba: "rgba(240, 248, 255, 0.25)"
    },
    {
        name: "antiquewhite",
        rgba: "rgba(250, 235, 215, 0.25)"
    },
    {
        name: "aqua",
        rgba: "rgba(0, 255, 255, 0.25)"
    },
    {
        name: "aquamarine",
        rgba: "rgba(127, 255, 212, 0.25)"
    },
    {
        name: "azure",
        rgba: "rgba(240, 255, 255, 0.25)"
    },
    {
        name: "beige",
        rgba: "rgba(245, 245, 220, 0.25)"
    },
    {
        name: "bisque",
        rgba: "rgba(255, 228, 196, 0.25)"
    },
    {
        name: "black",
        rgba: "rgba(0, 0, 0, 0.25)"
    },
    {
        name: "blanchedalmond",
        rgba: "rgba(255, 235, 205, 0.25)"
    },
    {
        name: "blue",
        rgba: "rgba(0, 0, 255, 0.25)"
    },
    {
        name: "blueviolet",
        rgba: "rgba(138, 43, 226, 0.25)"
    },
    {
        name: "brown",
        rgba: "rgba(165, 42, 42, 0.25)"
    },
    {
        name: "burlywood",
        rgba: "rgba(165, 42, 42, 0.25)"
    },
    {
        name: "cadetblue",
        rgba: "rgba(95, 158, 160, 0.25)"
    },
    {
        name: "chartreuse",
        rgba: "rgba(127, 255, 0, 0.25)"
    },
    {
        name: "chocolate",
        rgba: "rgba(210, 105, 30, 0.25)"
    },
    {
        name: "coral",
        rgba: "rgba(255, 127, 80, 0.25)"
    }, {
        name: "gray",
        rgba: "rgba(128, 128, 128,0.25)"
    },
    {
        name: "green",
        rgba: "rgba(0, 255, 0, 0.25)"
    },
    {
        name: "pink",
        rgba: "rgba(255, 192, 203, 0.25)"
    },
    {
        name: "purple",
        rgba: "rgba(128, 0, 128, 0.25)"
    },
    {
        name: "red",
        rgba: "rgba(255 , 0, 0, 0.25)"
    },

    {
        name: "white",
        rgba: "rgba(128, 128, 128, 0.25)"
    },
    {
        name: "yellow",
        rgba: "rgba(255, 255, 0, 0.25)"
    }
]


const color = async (str, index) => {


    try {
        let data = await pokeApi(`/pokemon-color/${index}`).then((e) => {

            const aux = e.data.pokemon_species.find(index => {
                if (index.name == str) return true
            })

            if (aux) return e.data.name

        })
        return data
    } catch (error) {
        console.log(error)
    }

}

const colorPokemon = async (value) => {

    let aux = undefined

    for (let index = 1; index < 11; index++) {
        aux = await color(value, index)
        if (aux) {
            const bool = await colores.find(element => {
                if (element.name === aux) {
                    return element.rgba
                }
            })
            return bool.rgba
        }
    }
    return undefined
}

export default colorPokemon