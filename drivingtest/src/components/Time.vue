<template>
  <div class="container ">
		<div class="timeruning text-success align-middle text-center font-weight-bold">{{time}}</div>
	</div>
</template>

<script>
   export default{
       data () {
           return {
               time : '',
               flag : false
           }
       },
       mounted () {
           let time = setInterval(()=>{
               if(this.flag == true){
                   clearInterval(time)
               }
               this.timeDown()
           },1000)
       },
    
       methods : {
           formate (time) {
               if(time>=10){
                   return time
               }else{
                   return `0${time}`
               }
           },
           timeDown () {
               
               // 获的当前时间戳
               const nowTime = Date.parse(new Date());
               // 获的结束时间戳
               const startTime = new Date(this.$store.state.nowTime2);
               const endTime = startTime.setMinutes((startTime.getMinutes()+45));
            //    console.log(endTime);
            //    console.log("endTime-nowTime"+(endTime-nowTime));
               
               let leftTime = parseInt((endTime-nowTime)/1000);
               let d = this.formate(parseInt(leftTime/24/60/60));
               let h = this.formate(parseInt(leftTime/60/60%24));
               let m = this.formate(parseInt(leftTime/60%60));
               let s = this.formate(parseInt(leftTime%60));
            //    let d = parseInt(leftTime/24/60/60)
            //    let h = parseInt(leftTime/60/60%24)
            //    let m = tparseInt(leftTime/60%60)
            //    let s = parseInt(leftTime%60)
               if(leftTime <= 0){
                   this.flag = true;
                   this.$emit('time-end');
               }
               this.time = `${m}:${s}`;
           }
           
       }
   }
</script>