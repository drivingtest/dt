<template>
     <div>
         <zk-time-down @time-end="message = '倒计时结束'" :endTime='endTime'></zk-time-down>
         <p>{{message}}</p> 
    </div>
</template>

<script>
import zkTimeDown from './components/zkTimeDown/zkTimeDown.vue'
export default {
    components : {
        zkTimeDown
    },
    data () {
        return {
            message : '正在倒计时',
            endTime : '2017-04-08 10:06:00'
        }
    }
}
</script>