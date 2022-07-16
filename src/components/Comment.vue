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
    <h1 class="pb-3 mb-8 text-center text-5xl border-b-2">コメント</h1>
    <!-- content -->
    <div class="overflow-auto max-h-96">
      <div v-for="player in players" :key="player.id" class="flex mt-4">
        <img src="../assets/avatar.png" class="w-10 h-10 rounded-full mr-4" />
        <div class="comment drop-shadow-md shadow-lg rounded-br-lg p-3 w-4/5">
          <div class="flex justify-between">
            <div>Name Player</div>
            <div id="timestamp">12:00:00 15 Jul 2022</div>
          </div>
          <div class="break-words comment-content">This is a comment</div>
        </div>
      </div>
    </div>
    <div class="form-holder mt-8 border-2 py-2">
      <input
        type="text"
        class="input w-10/12 border-r-2"
        placeholder="コメント入力"
      />
      <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon w-2/12" />
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
        {
          id: 10,
          name: "Tuan",
          image: "../assets/avatar.png",
          score: "6",
        },
        {
          id: 11,
          name: "Tuan",
          image: "../assets/avatar.png",
          score: "6",
        },
        {
          id: 12,
          name: "Tuan",
          image: "../assets/avatar.png",
          score: "6",
        },
      ],
    };
  },
};
</script>
<style scoped>
#timestamp {
  font-size: 10px;
  color: #97679b;
}

.comment {
  background-color: #f4f6f8;
}

.comment-content {
  color: #607181;
}

.icon {
  font-size: large;
}
</style>
