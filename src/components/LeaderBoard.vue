<template>
  <div
    class="
      px-4
      py-3
      md:px-6
      md:py-5
      bg-white
      w-1/3
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
      v-for="player in players"
      :key="player.id"
      class="flex justify-between mt-2"
    >
      <div class="flex">
        <img :src="player.image" class="w-8 h-8" />
        <span>{{ player.name }}</span>
      </div>
      <div>{{ player.score }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      players: [
        {
          id: 1,
          name: "Hieu",
          image: "../assets/avatar.png",
          score: "9",
        },
        {
          id: 3,
          name: "Vi",
          image: "../assets/avatar.png",
          score: "10",
        },
        {
          id: 4,
          name: "Hoang",
          image: "../assets/avatar.png",
          score: "10",
        },
        {
          id: 2,
          name: "Duc",
          image: "../assets/avatar.png",
          score: "6",
        },
        {
          id: 5,
          name: "Tuan",
          image: "../assets/avatar.png",
          score: "6",
        },
      ],
    };
  },
};
</script>
