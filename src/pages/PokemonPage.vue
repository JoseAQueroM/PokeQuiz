<template>
  <h1 class="title-Page" data-aos="zoom-in">¿Quien es este pokemon?</h1>

  <h2 v-if="!pokemon">Cargando...</h2>

  <div v-else data-aos="zoom-in" class="mt-5">
    <PokemonBase
      :pokeId="pokemon.id"
      :pokemons="pokemonsArr"
      @selection="checkAnswer($event)"
      :showPokemon="showPokemon"
      :disabled="buttonBlocked"
    />
  </div>

  <div class="mt-5" v-if="showAnswer" data-aos="zoom-in">
    <h2 class="mt-4">{{ message }}</h2>
    <button @click="resetGame" class="btn-Options mt-3">Reiniciar</button>
  </div>
</template>

<script>
import PokemonBase from '@/components/PokemonBase.vue'
import { getPokemonsOptions } from '@/helpers/getPokemonsOptions'

export default {
  components: { PokemonBase },

  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: true,
      message: '',
      showAnswer: '',
      buttonBlocked: false,
    }
  },
  methods: {
    async getPokemons() {
      this.pokemonsArr = await getPokemonsOptions()

      const randomInt = Math.floor(Math.random() * 4)
      console.log(randomInt)
      console.log(this.pokemonsArr)

      this.pokemon = this.pokemonsArr[randomInt]
    },

    checkAnswer(pokemonId) {
      this.showPokemon = false
      this.showAnswer = true
      this.buttonBlocked = true
      pokemonId == this.pokemon.id

      if (pokemonId == this.pokemon.id) {
        this.message = `Correcto! es ${this.pokemon.name} `
      } else {
        this.message = `Opps, el pokemon correcto era: ${this.pokemon.name}`
      }
    },

    resetGame() {
      this.showPokemon = true
      this.showAnswer = false
      this.buttonBlocked = false
      this.getPokemons()
    },
  },

  mounted() {
    this.getPokemons()
  },
}
</script>

<style></style>
