<template>
  <div id="app" class="md:w-screen min-h-screen md:h-screen">
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
      <Login class="m-auto" v-if="tab === 'user'" />
    </div>
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import Login from "./components/Login.vue";
import Comment from "./components/Comment.vue";

export default {
  name: "App",
  components: {
    Game,
    Login,
    LeaderBoard,
    Comment,
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
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Barlow Semi Condensed", sans-serif;
  background: radial-gradient(ellipse at top, #1f3756, #141539);
}
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
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-judge {
  opacity: 0;
  transform: translateY(10px);
}

.fade-judge-enter-active {
  transition: all 0.2s ease;
}

.fade-player {
  opacity: 0;
  transform: translateX(10px);
}

.fade-player-enter-active {
  transition: all 1s ease;
}
.fade-mod-enter {
  opacity: 0;
}

.fade-mod-enter-active,
.fade-mod-leave-active {
  transition: all 0.6s ease-out;
}

.fade-mod-leave-to {
  opacity: 0;
}
</style>
