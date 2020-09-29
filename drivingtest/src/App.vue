<template>
<div>
  <MyJu :title="title1"/>
  <div class="container">
  <MyAnswer :km='km1' />

  </div>
  </div>
</template>

<script>
import MyJu from '@/components/MyJu'
import MyAnswer from '@/components/MyAnswer'

export default {
  name: 'App',
  components: {
    MyJu,
    MyAnswer,
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
