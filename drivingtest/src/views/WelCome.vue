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
       // 传递一个参数
            let date = new Date();
            // 将当前时间转换成字符串格式赋给nowtime
            let month = date.getMonth() + 1;
            console.log(month);
            let strDate = date.getDate();
            console.log(strDate);
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            let nowtime;
            nowtime = date.getFullYear() + "-" + month + "-" + strDate
            + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
           
            console.log(`计算成功，值为:${nowtime}`);
            // let nowtime = currentDate;

            this.$store.state.nowTime2 = nowtime;
            console.log("传值成功，开始考试，传值："+nowtime+"\n\t"+this.$store.state.nowTime2);
    },
  },
};
</script>