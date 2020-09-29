<template>
    <div class="container">
        <div class="card dw">
        <img :src="this.$store.state.isJige?jige:bujige" class="card-img-top mb-0" >
        <div class="card-body " style="text-align:center">
            <div class="row">
                <div class="col">
                    <p class="p1"><span class=" font-weight-bold" style="font-size:20px">得分：</span> <span class="text-danger font-weight-bold" style="font-size:25px">{{this.$store.state.zongcj}}</span></p>
                    <button type="button" class="btn btn-success btn-lg " @click="home">返回</button>
                </div>
                <div class="col">
                     <p class="p1"><span class="font-weight-bold" style="font-size:20px">剩余时间：</span> <span class="text-success font-weight-bold" style="font-size:25px"></span></p>
                     <button type="button" class="btn btn-danger btn-lg " @click="cuoti">查看错题</button>
                </div>
            </div>
            
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tx:require('../assets/tx.png'),
            jige:require('../assets/jige.png'),
            bujige:require('../assets/bujige.png'),
        }
    },
    methods: {
        cuoti:function(){
            this.$router.push('/cuoti');
        },
        home:function(){
            this.$router.push('/');
        }
    },
    
}
</script>

<style lang="css">
    .dw {
  position: relative;
}
 .p1 {
    float: left;
    height: 33px;
    line-height: 33px;
    position: absolute;
    bottom: 200px;
    left: 220px;
}
</style>