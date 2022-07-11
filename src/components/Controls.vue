<template>
  <div class="controls">
    <p class="check" title="Comprobar resultado" @click="sendSolution">Comprobar &#x2714;</p>
    <p title="Nuevo juego" @click="newGame">&#x21bb;</p>
    <p title="Deshacer" @click="back">&#x21e6;</p>
  </div>

  <Teleport to="#app">
    <modal-solution :show="showSolution" @closeModal="showSolution = false" />
  </Teleport>
</template>

<script>
import ModalSolution from '@/components/ModalSolution.vue'

import { useFlag } from '@/composables/useFlag'

export default {
  components: {
    ModalSolution
  },
  setup() {
    const { sendSolution, back, newGame, showSolution } = useFlag()
    return { sendSolution, back, newGame, showSolution }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.controls {
  display: flex;
  flex-wrap: reverse;
  column-gap: Min(2vw, .5rem);
  margin: .5rem 0;
  font-weight: 600;
  font-size: Min(5vw, 1.2rem);
  border-radius: 3px;
  transition: transform ease-in-out .3s;

  >* {
    padding: .5rem Min(4vw, 1rem);
    color: $color-red;
    background-color: $background-color;
    border: 1px solid $border-color;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  >*:hover {
    color: $gray-dark;
    cursor: pointer;
  }

  .check {
    flex: 1;
  }
}
</style>