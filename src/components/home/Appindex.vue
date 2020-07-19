<template>
  <div class="top">
    <el-container>
      <el-container>
        <el-main>
          <el-carousel :interval="4000" type="card" height="800px" style="width: 90%;margin-left: 5%">
            <el-carousel-item v-for="(item, i) in urls">
              <el-image
                :src="item.url"
                :fit="fill" @click="seeBook()"></el-image>
            </el-carousel-item>
          </el-carousel>
          <div class="entity">
            今日上新
          </div>
          <div class="absolute">
          </div>
        </el-main>
        <el-footer>天宫出版 翻版必究</el-footer>
      </el-container>
    </el-container>
    <el-backtop target=".top"></el-backtop>
  </div>
</template>
<script>
export default {
  name: 'Appindex',
  data () {
    return {
      urls: [
        {url: 'https://i.loli.net/2019/04/10/5cad63931ce27.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cad643643d4c.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada9870c2ab.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada9ec514c9.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada8e1aa892.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada858e6019.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada962c287c.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada9c852298.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada9202d970.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada976927da.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada87fd5c72.jpg'},
        {url: 'https://i.loli.net/2019/04/10/5cada824c7119.jpg'}
      ],
      fill: 'fill'
    }
  },
  methods: {
    seeBook: function () {
      var _this = this
      this.$store.commit('show', false)
      _this.$router.replace('/library')
    }
  }
}
</script>
<style scope>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
    width: 30%;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(0, 0, 0, 0.1);
    width: 30%;
  }

  .el-image {
    width: 100%;
    height: 100%;
  }

  .absolute {
    width: 100%;
    height: 100%;
    background-image: url("timg77.jpg");
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .entity {
    width: 100%;
    height: 1000px;
    background-color: white;
    margin: 0;
  }
</style>
