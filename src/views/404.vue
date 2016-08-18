<template>
  <div class="not-found">
    <div>找不到指定页面:-(</div>
    <br>
    <p>{{ time }}s后将自动跳转到首页</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: 5,
      };
    },
    route: {
      data() {
        const t = setInterval(() => {
          if (this.time <= 0) {
            clearInterval(t);
            this.$route.router.go({ name: 'home' });
            return;
          }
          this.time -= 1;
        }, 1000);
      },
    },
  };
</script>

<style scoped>
  .not-found {
    text-align: center;
    margin-top: 150px;
  }
  .not-found div {
      font-size: 4em;
      color: #80BD01;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, .6);
    }

  .not-found  p {
      margin-top: 5px;
      color: lighten(#000, 35%);
   }
  
</style>
