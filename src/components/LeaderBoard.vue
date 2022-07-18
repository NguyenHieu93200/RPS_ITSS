<template>
  <div
    class="
      px-4
      py-3
      md:px-6
      md:py-5
      bg-white
      w-1/4
      m-auto
      border
      items-center
      rounded-lg
      md:rounded-2xl
    "
  >
    <h1 class="pb-3 mb-8 text-center text-5xl border-b-2">Leaderboard</h1>
    <!-- content -->
    <div
      v-for="(player, index) in players"
      :key="index"
      class="flex flex-wrap mt-4"
    >
      <div class="w-2/12 mr-4 score-player text-center">
        <div class="center">{{ index + 1 }}</div>
      </div>
      <div class="w-9/12 flex justify-between score-player">
        <div class="flex">
          <img src="../assets/avatar.png" class="w-10 h-10 rounded-full mr-4" />
          <span class="center">{{ player.name }}</span>
        </div>
        <div class="mr-4 center">{{ player.score }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      showModal: false,
      players: null,
    };
  },
  created() {
    this.getRankings();
  },
  methods: {
    getRankings() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      axios
        .get(`http://127.0.0.1:8000/api/v1/rank/list`, config)
        .then((response) => {
          this.players = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
<style scoped>
.score-player {
  background-color: #f4f6f8;
}

.center {
  margin-top: 7px;
}
</style>
