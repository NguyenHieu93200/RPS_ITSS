<template>
  <div id="app" class="md:w-screen min-h-screen md:h-screen">
    <router-view />
  </div>
</template>

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
