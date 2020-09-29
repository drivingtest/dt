<template>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-3" v-for="(i, index) in this.$store.state.cuoti" :key="index">
                    <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title">{{i.ti}}</h4>
                        <div class="option ">
                                <p v-for="(item, index) in i.xx" :key="index">{{item}}</p>
                                </div>
                                <p>你的选择是：<span class="text-danger font-weight-bold">{{i.xs}}</span></p>
                                <hr>
                                <p class="text-success font-weight-bold">正确答案是：{{i.xx[i.daan]}}</p>
                    </div>
                </div>
                </div>
            </div>
            <button type="button"  class="btn btn-primary btn-lg btn-block" @click="home">返回</button>
        </div>

</template>

<script>
export default {
    methods: {
         home:function(){
            this.$router.push('/');
        }
    },
}
</script>