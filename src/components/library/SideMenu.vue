<template>
  <el-menu default-active="0" class="el-menu-vertical-demo" active-text-color="green" @select="handleSelect"
           @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="0">
      <i class="el-icon-s-home"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-s-platform"></i>
      <span slot="title">文学</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-video-camera"></i>
      <span slot="title">流行</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-s-release"></i>
      <span slot="title">文化</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-s-marketing"></i>
      <span slot="title">生活</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-s-check"></i>
      <span slot="title">经管</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-s-data"></i>
      <span slot="title">科技</span>
    </el-menu-item>
    <div class="le" @click="showOrNot(1)" v-show="isCollapse">
      <spain> >> </spain>
    </div>
    <div class="ri" @click="showOrNot(2)" v-show="!isCollapse">
      <spain> << </spain>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      cid: '',
      isCollapse: true
    }
  },
  methods: {
    handleSelect (key) {
      this.cid = key
      this.$emit('indexSelect')
      this.$store.commit('show', 'false')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    showOrNot (val) {
      if (val === 1) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
  }

  .le {
    position: absolute;
    bottom: -30px;
    left: 40%;
    cursor:pointer;
  }

  .ri {
    position: absolute;
    bottom: 10px;
    left: 50%;
    cursor:pointer;
  }
</style>
