<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div
            class="modal-container flex flex-col items-center justify-between"
          >
            <div class="modal-header w-11/12">
              <slot name="header"
                ><div
                  class="flex justify-center md:justify-between items-center"
                >
                  <p class="score text-2xl font-bold">RULES</p>
                  <button
                    class="modal-default-button hidden md:block"
                    @click="$emit('close')"
                  >
                    <img src="../assets/img/icon-close.svg" alt="rules" />
                  </button></div
              ></slot>
            </div>

            <div class="modal-body">
              <slot name="body"
                ><img src="../assets/img/image-rules.svg" alt="rules"
              /></slot>
            </div>
            <div
              class="modal-footer flex items-center justify-center md:hidden"
            >
              <button class="modal-default-button" @click="$emit('close')">
                <img src="../assets/img/icon-close.svg" alt="rules" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
@media screen and (max-width: 767px) {
  .modal-container {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
