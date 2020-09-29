<template>
    <div>
        <div class="q-detail pos fl" style="display: block; background-color: rgb(255, 253, 230);">
            <div class="tit" style="background-color: rgb(255, 253, 230);">图片信息</div>
            <img class="img-block" :src="tks[OneIndex].img" alt="">
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    computed: {
    ...mapState([
      'tks',
      'OneIndex',
    ])
  },
}
</script>

<style lang="css">
    
    .tit {
  position: absolute;
  top: -17px;
  left: 87px;
  background: #fff;
  background-color: rgb(255, 255, 255);
  padding: 5px;
  font-size: 18px;
  color: #333;
  line-height: 25px;
}
.q-detail {
    display: none;
    width: 100%;
    height: 230px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 25px 0;
}
.q-detail img {
    width: 400px;
    height: 200px;
    display: block;
    margin: 0 auto;
}
</style>