<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 col-12 img-Container">
        <img
          :src="imgSrc"
          :class="{ 'pokemon-Img': showPokemon, 'pokemon-ImgFalse': !showPokemon }"
          alt=""
          srcset=""
        />
      </div>

      <div class="col-md-4 col-12 mt-3">
        <button
          class="btn-Options col-12 mt-1 mb-1"
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :disabled="buttonBlocked"
          @click="$emit('selection', pokemon.id)"
        >
          {{ pokemon.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokeId: {
      type: Number,
      required: true,
    },

    pokemons: {
      type: Array,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: true,
    },
    buttonBlocked: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`
    },
  },
}
</script>

<style>
.btn-Options {
  background: none;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 1px white solid;
  font-size: 1.5rem;
  text-transform: capitalize;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-Options:hover {
  background: white;
  color: black;
}
.pokemon-Img {
  max-height: 150px;
  filter: brightness(0);
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  opacity: 1;
  transition: opacity 3s ease-in-out;
  margin-bottom: 2rem;
}

.pokemon-ImgFalse {
  max-height: 150px;
  transition: 1s ease-in-out;
  opacity: 1;
  margin-bottom: 2rem;
}

.img-Container {
  background: none;
  transition: 1s ease;
  filter: drop-shadow(0 0 2px rgb(255, 255, 255));
}

.img-Container:hover {
  transform: scale(1.15);
  filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
}

@media screen and (max-width: 767px) {
  .btn-Options {
    padding: 5px 5px;
  }
}
</style>
