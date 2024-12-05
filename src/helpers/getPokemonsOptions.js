import pokeApi from '@/api/pokeApi'

const getPokemons = () => {
  const PokemonsArr = Array.from(Array(650))
  return PokemonsArr.map((arr, index) => index + 1)
}

export const getPokemonsOptions = async () => {
  const sortPokemons = getPokemons().sort(() => Math.random() - 0.5)

  const pokemons = await getPokeNames(sortPokemons.splice(0, 4))
  return pokemons
}

const getPokeNames = async ([a, b, c, d] = []) => {
  const promisesArr = [
    pokeApi.get(`/${a}`),
    pokeApi.get(`/${b}`),
    pokeApi.get(`/${c}`),
    pokeApi.get(`/${d}`),
  ]

  const [pk1, pk2, pk3, pk4] = await Promise.all(promisesArr)

  return [
    { name: pk1.data.name, id: pk1.data.id },
    { name: pk2.data.name, id: pk2.data.id },
    { name: pk3.data.name, id: pk3.data.id },
    { name: pk4.data.name, id: pk4.data.id },
  ]
}
