<template>
  <transition name="modal">
    <div class="modal-wrapper" v-if="info">
      <div class="modal">
        <p>{{ info }}</p>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'ModalInfo',
  props: ['info']
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.modal-wrapper {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal {
  width: 75%;
  max-width: 400px;
  margin: 1rem auto;
  padding: Min(4vw, 1rem);
  text-align: center;
  font-size: Min(4vw, 1rem);
  border-radius: 10px;
  color: white;
  background-color: $gray-dark;
  border: 1px solid $gray-medium;
  box-shadow: 1px 1px 2px rgb(0, 0, 0);
}

//  Sytles applied to element with transition = "modal"
.modal-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

// No es necesario pero se deja por claridad
.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.modal-enter-active {
  transition: all 1s ease-in-out;
}

// No es necesario pero se deja por claridad
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.modal-leave-active {
  transition: all 1s ease-in-out;
}
</style>