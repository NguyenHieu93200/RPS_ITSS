<template>
  <div
    class="
      px-4
      py-3
      md:px-6
      md:py-5
      border
      items-center
      rounded-lg
      md:rounded-2xl
    "
  >
    <h1 class="text-4xl text-white text-center font-bold mb-5 uppercase">
      Your Score is:
    </h1>
    <h1 class="text-6xl text-white text-center font-bold mb-5 uppercase">
      {{ getScore ? getScore : 0 }}
    </h1>
    <button
      @click="replayGame"
      class="
        bg-white
        text-lg
        score
        uppercase
        hover:text-red-400
        px-10
        py-2
        ml-12
      "
    >
      Replay
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { putScore } from "../api/score";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["getScore"]),
  },
  created() {
    this.updateScore();
  },
  methods: {
    ...mapActions(["replayGame"]),
    updateScore() {
      putScore(this.getScore)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
