<template>
  <div class="pt-5 flex flex-col items-center">
    <header
      class="
        px-4
        py-3
        md:px-6
        md:py-5
        border
        flex
        items-center
        justify-between
        rounded-lg
        md:rounded-2xl
        w-5/6
        md:w-1/2
      "
    >
      <nav>
        <img class="w-20 md:w-auto" src="../assets/img/logo.svg" alt="logo" />
      </nav>
      <div class="flex flex-row">
        <div
          class="
            scoreboard
            flex flex-col
            items-center
            bg-white
            rounded-lg
            py-2
            h-full
            w-20
            mr-5
          "
        >
          <p class="uppercase text-xs md:text-sm">round</p>
          <p class="score text-4xl md:text-5xl font-bold">
            {{ getRound ? getRound : 1 }}
          </p>
        </div>
        <div
          class="
            scoreboard
            flex flex-col
            items-center
            bg-white
            rounded-lg
            py-2
            h-full
            w-20
          "
        >
          <p class="uppercase text-xs md:text-sm">score</p>
          <p class="score text-4xl md:text-5xl font-bold">
            {{ getScore ? getScore : 0 }}
          </p>
        </div>
      </div>
    </header>
    <div class="gameplay mt-16 w-11/12 md:w-auto md:mt-5">
      <transition name="fade" mode="out-in" appear>
        <pick-hand v-if="!getGameState && !getFinalResult" />
        <game-on v-if="getGameState && !getFinalResult" />
        <result v-if="getFinalResult" />
      </transition>
    </div>
    <button
      class="
        rule-btn
        uppercase
        text-white text-lg
        border
        py-2
        px-10
        rounded-lg
        md:absolute
        bottom-10
        my-8
        md:my-0
        md:right-20
        tracking-wider
      "
      id="show-modal"
      @click="showModal = !showModal"
    >
      Rules
    </button>
    <transition name="fade-mod">
      <modal v-if="showModal" @close="showModal = !showModal" />
    </transition>
  </div>
</template>

<script>
import GameOn from "./GameOn.vue";
import Modal from "./Modal.vue";
import PickHand from "./PickHand.vue";
import Result from "./Result.vue";
import { mapGetters } from "vuex";

export default {
  components: { PickHand, Modal, GameOn, Result },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["getGameState", "getScore", "getRound", "getFinalResult"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
  border: 2px solid #606e85;
}
.scoreboard > p {
  color: #2a46c0;
}
p.score {
  color: #3b4363;
}
/* @media screen and (max-width: 767px) {
  .rule-btn {
    right: 50%;
    transform: translateX(50%);
  }
} */
</style>
