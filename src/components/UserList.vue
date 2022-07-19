<template>
  <div
    class="
      px-4
      py-3
      md:px-6
      md:py-5
      bg-white
      w-1/2
      m-auto
      border
      items-center
      rounded-lg
      md:rounded-2xl
    "
  >
    <el-table
      v-loading="loading"
      :data="items.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="名前"
        prop="name">
      </el-table-column>
      <el-table-column
        label="メールアドレス"
        prop="mail">
      </el-table-column>
      <el-table-column
        sortable
        label="スコア"
        prop="score">
      </el-table-column>
      <el-table-column
        sortable
        label="ランキング"
        prop="ranking">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            :scope="scope"
            placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">削除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUsers,deleteUser } from '../api/user';
export default {
  data: () => ({
    heading: "Regular Tables",
    subheading: "Tables are the backbone of almost all web applications.",
    icon: "pe-7s-drawer icon-gradient bg-happy-itmeo",
    items: [],
    striped: true,
    bordered: false,
    outlined: false,
    small: false,
    hover: false,
    dark: false,
    fixed: true,
    footClone: false,
    search: '',
    loading: false
  }),

  methods: {
    async handleDelete(index, item) {
      this.$confirm('これにより、ファイルが完全に削除されます。 継続する？', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
      }).then(async () => {
        const res = await deleteUser(item.id)
            if (res) {
              this.items.splice(index,1)
              this.$message({
                message: '正常に削除されました。',
                type: 'success'
              });
            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '削除がキャンセルされました'
          });          
        });
    }
  },
  async created() {
    this.loading = true
    const res = await getUsers()
    this.items = res.data
    this.loading = false
  }
};
</script>
<style lang="css">
td {
  border-top: 1px solid #dee2e6;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.25rem 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
