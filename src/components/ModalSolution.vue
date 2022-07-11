<template>
  <transition name="modal">
    <div class="modal" v-if="show">
      <div class="modal-wrapper">

        <div class="modal-header">
          <p class="title">Solución</p>
          <p class="close" @click="$emit('closeModal')">&times;</p>
        </div>

        <div class="modal-body">
          <div class="board">
            <div class="countries" v-for="(country, index) in countriesToGuess" :key="index">
              <div class="name" :title="country">{{ country }}</div>
              <div class="country">
                <img :src="getUrl(country)" :alt="country" :title="country">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
import { useFlag } from '@/composables/useFlag'

export default {
  name: 'ModalSolution',
  props: ['show'],

  setup() {
    const { countriesToGuess, getUrl } = useFlag()

    return { countriesToGuess, getUrl }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($gray-dark, 0.5);
}

.modal-wrapper {
  margin: 50px auto 0;
  width: 80%;
  border-radius: 10px;
  background-color: $gray-light;
  border: 1px solid $gray-medium;
}

.modal-header {
  padding: .6rem 1rem;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  border-bottom: 1px solid rgb(210, 210, 210);

  .title {
    font-size: .9rem;
    letter-spacing: .05rem;
    text-shadow: 1px 1px 2px $gray-medium;
  }

  .close:hover {
    cursor: pointer;
    color: $gray-medium;
  }
}

.board {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1rem;

  .countries {
    .name {
      font-size: .7rem;
      padding: .3rem 0;
      white-space: nowrap;
      overflow: hidden;
    }

    .country {
      border: 1px solid $gray-dark;

      img {
        display: block;
        object-fit: cover;
        max-width: 100%;
      }
    }
  }
}

//  Sytles applied to element with transition = "modal"
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.modal-enter-active {
  transition: all 0.3s ease;
}

.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-leave-active {
  transition: all 0.3s ease;
}
</style>
