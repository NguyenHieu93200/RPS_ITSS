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
      <div v-for="comment in comments" :key="comment.id" class="flex mt-4">
        <img src="../assets/avatar.png" class="w-10 h-10 rounded-full mr-4" />
        <div class="comment drop-shadow-md shadow-lg rounded-br-lg p-3 w-4/5">
          <div class="flex justify-between">
            <div>{{ comment.user }}</div>
            <div id="timestamp">
              {{ $dayjs(comment.created_at).format("MM-DD-YYYY H:mm A") }}
            </div>
          </div>
          <div class="flex justify-between">
            <div class="break-words comment-content">{{ comment.content }}</div>
            <font-awesome-icon
              v-if="userId == comment.user_id"
              icon="fa-solid fa-trash-can"
              class="cursor-pointer"
              @click="deleteComment(comment.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-holder mt-8 border-2 py-2">
      <input
        v-model="newComment"
        type="text"
        class="input w-10/12 border-r-2"
        placeholder="コメント入力"
      />
      <font-awesome-icon
        icon="fa-solid fa-paper-plane"
        class="icon w-2/12 cursor-pointer"
        @click="postComment"
      />
    </div>
  </div>
</template>
<script>
import { getComments, postComment, deleteCmt } from '../api/comment';

export default {
  data() {
    return {
      showModal: false,
      comments: null,
      newComment: null,
      userId: null,
    };
  },
  created() {
    if (localStorage.getItem("userId")) {
      this.userId = localStorage.getItem("userId");
    }
    this.getComment();
  },
  methods: {
    getComment() {
      getComments()
        .then((response) => {
          this.comments = response;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    postComment() {
      postComment(this.newComment)
        .then(() => {
          this.newComment = "";
          this.getComment();
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    deleteComment(commentId) {
      deleteCmt(commentId)
        .then(() => {
          this.getComment();
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
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
