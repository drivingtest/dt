<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">欢迎使用科目一模拟考试系统</h1>
        <hr>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          @click="dati"
        >
          开始考试
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dati: function () {
      this.$router.push("/dati");
    },
  },
};
</script>