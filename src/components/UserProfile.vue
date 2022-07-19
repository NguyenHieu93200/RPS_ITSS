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
      relative
    "
  >
    <b-button
      class="border-2 text-xl p-4 save-btn absolute top-3 right-3"
      @click="logOut"
      >Log out</b-button
    >
    <div class="text-2xl text-center">User Profile</div>
    <div>
      <img
        src="../assets/avatar.png"
        class="w-32 h-32 rounded-full m-auto mt-4 cursor-pointer"
        @click="$refs.fileInputAvatar.click()"
      />
    </div>
    <div class="mt-4">
      <span class="text-lg font-bold">Email: </span>
      <b-form-input v-model="email" disabled></b-form-input>
    </div>
    <div>
      <span class="text-lg font-bold">Name: </span>
      <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
    </div>
    <b-button class="mt-4 border-2 text-xl p-4 save-btn" @click="saveUserInfo"
      >Save</b-button
    >
    <input
      ref="fileInputAvatar"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      style="display: none"
      @input="UploadAvatar"
    />
  </div>
</template>

<script>
import { getUserInfo } from "../api/user";
import { logout } from '../api/authentication';

export default {
  data() {
    return {
      email: "",
      name: "",
    };
  },
  methods: {
    UploadAvatar() {
      const input = this.$refs.fileInputAvatar;
      const files = input.files;
      if (files && files[0]) {
        console.log(files[0]);
      }
    },
    saveUserInfo() {
      console.log("save");
    },
    logOut() {
      logout()
        .then(this.$router.push("/login"))
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  async created() {
    const id = localStorage.getItem("userId")
    const userInfo = await getUserInfo(id)
    this.email = userInfo.email
    this.name = userInfo.name
  }
};
</script>
<style scoped>
.save-btn {
  background-color: grey;
  color: white;
  margin-left: 40%;
}
</style>
