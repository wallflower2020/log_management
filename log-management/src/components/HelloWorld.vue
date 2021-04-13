<template>
  <div class="hello">
    <div class="block">
    <el-carousel trigger="click" :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in img" :key="item">
      <!-- <h3 class="medium"></h3> -->
      <el-image :src="item.add" style="width: 100%;height: 260px;"></el-image>
    </el-carousel-item>
    </el-carousel>
  </div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://www.bilibili.com/"
          target="_blank"
        >
          bilibili
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your log-management',
      img: [
        {
          add:'https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg'
        },
        // {
        //   add:'https://w.wallhaven.cc/full/v9/wallhaven-v9gk6l.jpg'
        // },
        {
          add:'https://w.wallhaven.cc/full/28/wallhaven-288w89.jpg'
        },
        // {
        //   add:'https://w.wallhaven.cc/full/4l/wallhaven-4lw1gq.jpg'
        // },
        // {
        //   add:'https://w.wallhaven.cc/full/m9/wallhaven-m9pog9.jpg'
        // },
        // {
        //   add:'https://w.wallhaven.cc/full/39/wallhaven-39r5xv.jpg'
        // }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>
