import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    hands: ["paper", "rock", "scissors"],
    playerPick: "",
    housePick: "",
    result: "",
    inSession: false,
    inHouseSession: false,
    resCheck: false,
    finalResult: false,
    score: 0,
    round: 1,
  },

  getters: {
    getToken: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.userId;
    },
    getPlayerHand: (state) => {
      return state.playerPick;
    },
    getGameState: (state) => {
      return state.inSession;
    },
    getHouseHand: (state) => {
      return state.housePick;
    },
    getHouseState: (state) => {
      return state.inHouseSession;
    },
    getResult: (state) => {
      return state.result;
    },
    getResState: (state) => {
      return state.resCheck;
    },
    getScore: (state) => {
      return state.score;
    },
    getRound: (state) => {
      return state.round;
    },
    getFinalResult: (state) => {
      return state.finalResult;
    },
  },

  mutations: {
    SETTOKEN: (state, payload) => {
      state.token = payload.token;
      state.userId = payload.user_id;
    },
    SETHAND: (state, payload) => {
      state.playerPick = payload;
      state.inSession = true;
    },
    SETHOUSEHAND: (state) => {
      const num = Math.floor(Math.random() * 3);
      state.housePick = state.hands[num];
      state.inHouseSession = true;
    },
    CHECKHANDS: (state) => {
      if (state.housePick === state.playerPick) {
        state.result = "it's a tie";
      } else if (state.housePick === "paper" && state.playerPick === "rock") {
        state.result = "house wins";
        if (state.score === 0) {
          state.score = 0;
        } else {
          state.score--;
        }
      } else if (
        state.housePick === "rock" &&
        state.playerPick === "scissors"
      ) {
        state.result = "house wins";
        if (state.score === 0) {
          state.score = 0;
        } else {
          state.score--;
        }
      } else if (
        state.housePick === "scissors" &&
        state.playerPick === "paper"
      ) {
        state.result = "house wins";
        if (state.score === 0) {
          state.score = 0;
        } else {
          state.score--;
        }
      } else {
        state.result = "you win";
        state.score++;
      }
      state.resCheck = true;
    },
    REPLAYSET: (state) => {
      state.inSession = false;
      state.inHouseSession = false;
      state.resCheck = false;
      state.result = false;
      state.round++;
    },
    SETRESULT: (state) => {
      state.finalResult = true;
    },
    REPLAYGAME: (state) => {
      state.inSession = false;
      state.inHouseSession = false;
      state.resCheck = false;
      state.result = false;
      state.finalResult = false;
      state.score = 0;
      state.round = 1;
    },
  },

  actions: {
    setToken: (context, payload) => {
      context.commit("SETTOKEN", payload);
    },
    setHand: (context, payload) => {
      context.commit("SETHAND", payload);
      setTimeout(() => {
        context.commit("SETHOUSEHAND");
      }, 1000);
      setTimeout(() => {
        context.commit("CHECKHANDS");
      }, 2000);
    },
    replaySet: (context) => {
      context.commit("REPLAYSET");
    },
    setFinalResult: (context) => {
      context.commit("SETRESULT");
    },
    replayGame: (context) => {
      context.commit("REPLAYGAME");
    },
  },
  modules: {},
});
