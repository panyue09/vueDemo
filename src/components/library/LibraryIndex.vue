<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import Books from './Books'

export default {
  name: 'AppLibrary',
  components: {Books, SideMenu},
  mounted: function () {
    this.$axios.get('categories/0/books').then(resp => {
      if (resp && resp.status === 200) {
        this.$refs.booksArea.books = resp.data
      }
    })
  },
  methods: {
    listByCategory () {
      var _this = this
      var cid = this.$refs.sideMenu.cid
      var url = 'categories/' + cid + '/books'
      this.$axios.get(url).then(resp => {
        if (resp && resp.status === 200) {
          _this.$refs.booksArea.books = resp.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }

  .el-container {
    height: 94%;
    width: 100%;
  }
</style>
