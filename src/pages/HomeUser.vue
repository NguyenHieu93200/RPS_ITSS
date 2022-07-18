<template>
  <div>
    <div class="topnav">
      <a
        :class="{ active: isActive['game'] }"
        @click="changeTab('game', $event)"
        >じゃんけんぽん</a
      >
      <a
        :class="{ active: isActive['comment'] }"
        @click="changeTab('comment', $event)"
        >コメント</a
      >
      <a
        :class="{ active: isActive['ranking'] }"
        @click="changeTab('ranking', $event)"
        >ランキング</a
      >
      <a
        :class="{ active: isActive['user'] }"
        @click="changeTab('user', $event)"
        >ユーザー</a
      >
    </div>
    <div class="main-content">
      <Game v-if="tab === 'game'" />
      <LeaderBoard v-if="tab === 'ranking'" />
      <Comment v-if="tab === 'comment'" />
      <UserProfile class="m-auto" v-if="tab === 'user'" />
    </div>
  </div>
</template>

<script>
import Game from "../components/Game.vue";
import LeaderBoard from "../components/LeaderBoard.vue";
import Comment from "../components/Comment.vue";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    Game,
    LeaderBoard,
    Comment,
    UserProfile,
  },
  data() {
    return {
      tab: "game",
      isActive: {
        game: true,
        comment: false,
        ranking: false,
        user: false,
      },
    };
  },
  created() {
    if (!localStorage.getItem("token")) this.$router.push("/login");
  },
  methods: {
    changeTab(tabName) {
      Object.entries(this.isActive).map(([key]) => {
        this.isActive[key] = false;
      });
      this.isActive[tabName] = !this.isActive[tabName];
      return (this.tab = tabName);
    },
  },
};
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  width: 25%;
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #ffffff;
  color: black;
}
.main-content {
  background-color: transparent;
  margin-top: 3rem;
}
</style>
