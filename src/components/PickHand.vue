<template>
  <div class="flex mt-16 pb-20 flex-col relative">
    <div
      class="absolute -top-10 md:-top-16 -left-0 md:-left-10"
      @click.once="setHand('paper')"
    >
      <hand class="paper">
        <img slot="handImage" src="../assets/img/icon-paper.svg" alt="paper" />
        <div slot="handAfter" class="semi paper-semi"></div>
      </hand>
    </div>
    <div
      class="absolute -top-10 md:-top-16 -right-0 md:-right-10"
      @click.once="setHand('scissors')"
    >
      <hand class="scissors">
        <img
          slot="handImage"
          src="../assets/img/icon-scissors.svg"
          alt="scissors"
        />
        <div slot="handAfter" class="semi scissors-semi"></div>
      </hand>
    </div>
    <div
      class="absolute bottom-20 md:bottom-16 rock-par"
      @click.once="setHand('rock')"
    >
      <hand class="rock">
        <img
          slot="handImage"
          src="../assets/img/icon-rock.svg"
          alt="scissors"
        />
        <div slot="handAfter" class="semi rock-semi"></div>
      </hand>
    </div>
    <img src="../assets/img/bg-triangle.svg" alt="triangle" />
  </div>
</template>

<script>
import Hand from "./Hand.vue";
import { mapState } from "vuex";

export default {
  components: { Hand },
  computed: {
    ...mapState(["hands"]),
  },
  methods: {
    setHand(hand) {
      this.$store.dispatch("setHand", hand);
    },
  },
};
</script>

<style>
.paper {
  border: 15px solid #5671f5;
}
.scissors {
  border: 15px solid #eca922;
}
.rock-par {
  left: 50%;
  transform: translateX(-50%);
}
.rock {
  border: 15px solid #dd405d;
}
.hand {
  box-shadow: 0px 7px 2px 0px rgba(100, 100, 100, 0.27) inset;
  -webkit-box-shadow: 0px 7px 2px 0px rgba(100, 100, 100, 0.27) inset;
  -moz-box-shadow: 0px 7px 2px 0px rgba(100, 100, 100, 0.27) inset;
  z-index: 1;
}
.semi {
  width: 144px;
  height: 144px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  bottom: 1px;
  left: 0px;
}
.paper-semi {
  box-shadow: 0px 8px 1px 0px #4865f4;
}
.rock-semi {
  box-shadow: 0px 8px 1px 0px #dc2e4e;
}
.scissors-semi {
  box-shadow: 0px 8px 1px 0px #ec9e0e;
}
@media screen and (max-width: 768px) {
  .semi {
    width: 112px;
    height: 112px;
  }
}
</style>
