<template>
<div>
  <MyJu :title="title1"/>
  <div class="container">
  <MyAnswer :km='km1' />
  <MyTiImg/>
  </div>
  </div>
</template>

<script>
import MyJu from '@/components/MyJu'
import MyAnswer from '@/components/MyAnswer'
import MyTiImg from '@/components/MyTiImg'
export default {
  name: 'App',
  components: {
    MyJu,
    MyAnswer,
    MyTiImg
  },
  data() {
    return {
      title1:'科目一模拟考试',
      km1:'科目一'
    }
  },
}
</script>

<style>
</style>
