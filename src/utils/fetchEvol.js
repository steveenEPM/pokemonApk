import pokeApi from "../apis/pokeApi";


/**
 * Hallar evolucion de pokemon
 */
export const evo = async (id) => {
    console.log(id);
    try {
        let respons = await pokeApi(`/evolution-chain/${id}`)
            .then(e => {
                const { evolves_to } = e.data.chain
                return evolves_to
            })
            .then(e => {
                let species = undefined, evolves_to = undefined
                try {

                    species = e[0].species.name
                    evolves_to = e[0].evolves_to
                } catch (err) {
                    console.log("error1")
                    return { species, evolves_to }
                }

                return { species, evolves_to }
            })
            .then(e => {
                const { species } = e
                let evolve = undefined

                try {
                    evolve = e.evolves_to[0].species.name
                    console.log(evolve);

                } catch (err) {
                    console.log("error2")
                    return { species, evolve }
                }
                return { species, evolve }
            })
            console.log(respons)            
            return respons
    } catch (error) {
        console.log(error)
        return { species:undefined, evolve:undefined }
    }
}



/**
 * Hallar primera o segunda evolucion
 */
export const evoData = async (elemen) => {
    try {
        if (elemen === undefined) { return undefined }
        let name = elemen

        elemen = await pokeApi(`/pokemon/${name}`).then(e => {
            const { front_default } = e.data.sprites.other.home
            return { front_default, name }
        })
        return elemen

    } catch (error) {
        return undefined
    }
}