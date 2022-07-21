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
      >ログアウト</b-button
    >
    <div class="text-2xl text-center">プロファイル</div>
    <div>
      <div class="block text-center" style="padding: 10px">
        <el-avatar shape="square" :size="100" :src="url"></el-avatar>
      </div>
    </div>
    <div class="mt-4">
      <span class="text-lg font-bold">メール: </span>
      <b-form-input v-model="email" disabled></b-form-input>
    </div>
    <div>
      <span class="text-lg font-bold">名前: </span>
      <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
    </div>
    <div>
      <span class="text-lg font-bold">Avatar_url: </span>
      <b-form-input
        v-model="url"
        placeholder="Enter your avatar_url"
      ></b-form-input>
    </div>
    <b-button class="mt-4 border-2 text-xl p-4 save-btn" @click="saveUserInfo"
      >編集</b-button
    >
  </div>
</template>

<script>
import { getUserInfo, updateUser } from "../api/user";
import { logout } from "../api/authentication";

export default {
  data() {
    return {
      email: "",
      name: "",
      url: "",
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
    async saveUserInfo() {
      try {
        const id = localStorage.getItem("userId");
        const res = await updateUser(id, { name: this.name, avatar: this.url });
        if (res) {
          this.$message({
            message: "編集できました！",
            type: "success",
          });
        }
      } catch (error) {
        this.$message({
          message: "エーラが発生した！",
          type: "error",
        });
      }
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
    const id = localStorage.getItem("userId");
    const userInfo = await getUserInfo(id);
    this.email = userInfo.email;
    this.name = userInfo.name;
    if (userInfo.avatar) this.url = userInfo.avatar;
  },
};
</script>
<style scoped>
.save-btn {
  background-color: grey;
  color: white;
  margin-left: 40%;
}
</style>
