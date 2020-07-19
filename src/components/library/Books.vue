<template>
  <div>
    <div v-if="$store.state.bookShow">
      <el-row>
        <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
        <el-tooltip effect="dark" placement="right"
                    v-for="item in books.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    :key="item.id">
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
          <p slot="content" style="font-size: 13px;margin-bottom: 6px">
            <span>{{item.author}}</span> /
            <span>{{item.date}}</span> /
            <span>{{item.press}}</span>
          </p>
          <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
          <el-card style="width: 135px;margin-bottom: 20px;height: 250px;float: left;margin-right: 15px" class="book"
                   bodyStyle="padding:10px" shadow="hover">
            <div class="cover" @click="seeBookIntro(item)">
              <img :src="item.cover" alt="封面">
            </div>
            <div class="info">
              <div class="title">
                <a href="">{{item.title}}</a>
              </div>
              <!--<i class="el-icon-delete" @click="deleteBook(item.id)"></i>-->
            </div>
            <div class="author">{{item.author}}</div>
          </el-card>
        </el-tooltip>
        <!--<edit-form @onSubmit="loadBooks()" ref="edit"></edit-form>-->
      </el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="books.length">
      </el-pagination>
    </div>
    <div v-if="!$store.state.bookShow" class="introshow">
      <el-image
        style="width: 250px; height: 350px"
        :src="bookIntro.cover"
        :fit="fill">
      </el-image>
      <div class="info">
        <p><span></span>{{bookIntro.abs}}</p>
      </div>
      <div style="margin-top: 200px">
        <el-button style="border-radius: 30px;margin-right: 50px;" type="info" @clic="reading"><i class="el-icon-reading"></i> 立即阅读</el-button>
        <el-button style="border-radius: 30px" type="warning" @click="collect"><i class="el-icon-star-off"></i> 点击收藏</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from './EditForm'
import SearchBar from './SearchBar'

export default {
  name: 'Books',
  components: {
    EditForm,
    SearchBar
  },
  data () {
    return {
      books: [],
      currentPage: 1,
      pagesize: 17,
      bookIntro: {}, // 简介信息
      fill: 'fill'
    }
  },
  method: function () {
    // 初始化查询
    this.loadBooks()
  },
  methods: {
    // 查询书籍
    loadBooks () {
      var _this = this
      this.$axios.get('/books').then(resp => {
        if (resp && resp.status === 200) {
          _this.books = resp.data
        }
      })
    },
    // 翻页
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    },
    // 搜索图书
    searchResult () {
      var _this = this
      this.$axios
        .get('/search?keywords=' + this.$refs.searchBar.keywords, {}).then(resp => {
          if (resp && resp.status === 200) {
            _this.books = resp.data
          }
        })
    },
    // 删除图书
    /* deleteBook (id) {
              this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$axios
                  .post('/delete', {id: id}).then(resp => {
                    if (resp && resp.status === 200) {
                      this.loadBooks()
                    }
                  })
              }
              ).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                })
              })
              // alert(id)
            }, */
    // 查看简介
    seeBookIntro (item) {
      this.$store.commit('show', false)
      this.bookIntro = item
      console.log(item)
    },
    // 阅读图书
    reading () {

    },
    // 收藏图书
    collect () {

    }
    // 编辑图书
    /* editBook (item) {
                this.$refs.edit.dialogFormVisible = true
                this.$refs.edit.form = {
                  id: item.id,
                  cover: item.cover,
                  title: item.title,
                  author: item.author,
                  date: item.date,
                  press: item.press,
                  abs: item.abs,
                  category: {
                    id: item.category.id.toString(),
                    name: item.category.name
                  }
                }
              } */
  }
}
</script>

<style scoped>
  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  .el-image {
    float: left;
    padding: 20px;
  }

  .info {
    margin-top: 50px;
  }

  .info p {
    margin: 20px;
    display: block;
  }

  .info p > span {
    padding-left: 30px;
  }

  .introshow {
    margin-top: 100px;
    border: 1px solid black;
    height: 391px;
  }
</style>
