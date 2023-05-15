const axios = require("axios")

const pokeApi = (url) => {

	const instacia = axios({
		method: "get",
		url: url,
		baseURL: "https://pokeapi.co/api/v2",
		timeout: 72000
	})

	return instacia

}


async function main() {

	try {
		let respons = await pokeApi("/evolution-chain/160")
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
					console.log("error 1")
					return { species, evolves_to }
				}

				return { species, evolves_to }
			})
			.then(e => {
				const { species } = e
				let evolve = undefined

				try {
					evolve = e.evolves_to[0].species.name
				} catch (err) {
					console.log("error 2")
					return { species, evolve }
				}

				return { species, evolve }
			})


		console.log(respons)

	} catch (err) {
		console.log("error")

	}

}


main()

