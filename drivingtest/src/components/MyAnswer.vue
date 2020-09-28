<template>
    <div>
        
            <div class="row pos mb-3">
                <div class="col-lg-3 ">
                    <div class="card mb-3">
                        <div class="card-body kt">
                            <h4 class="card-title tit">{{t1}}</h4>
                            <p class="card-text">{{p1}}</p>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body user-info ">
                            <h4 class="card-title tit">{{t2}}</h4>
                            <img :src="tx" alt="">
                            <p>
                                <label class="mr-3">姓</label> <label >名：</label> <span>学员</span>
                                </p>
                                <p><label for="">考试类型：</label> <span>小车类</span></p>
                                <p><label for="">考试科目：</label> <span>{{km}}</span></p>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="card-body ">
                            <h4 class="card-title tit">剩余时间</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card kstm pos">
                        <div class="card-body ">
                            <h4 class="card-title tit">考试题目</h4>
                            <p class="mb-3 ">(判断题)1、倒车过程中要缓慢行驶，注意观察车辆两侧和后方的情况，随时做好停车准备。</p>
                            <div class="option ">
                                <p>A：正确</p>
                                <p>B：错误</p>
                                </div>
                              <div class="tm-answer">
                    <div class="float-left sec-aswer">您的选项是：</div>
                    <div class="float-right aswer"><span class="float-left">请选择：</span>
                    <span class="pr-3"><button type="button" class="btn btn-outline-dark btn-sm ">A</button></span>
                    <span><button type="button" class="btn btn-outline-dark btn-sm ">B</button></span>
                    </div>
                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                              <div class="card  pos">
                        <div class="card-body ">
                            <h4 class="card-title tit">提示信息</h4>
                            <span class="tsxxt">单选题,请在备选答案中选择你认为正确的答案！</span>
                    </div>
                </div>
                        </div>
                        <div class="col p-3">
                            
                            <span class="pr-3 "><button type="button" class="btn btn-outline-primary  ">上一题</button></span>
                            <span class="pr-3 "><button type="button" class="btn btn-outline-success  ">下一题</button></span>
                            <span class="pr-3 "><button type="button" class="btn btn-outline-warning  ">交卷</button></span>
                        </div>
                    </div>

                      
                </div>
                <div class="col-lg-3">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title tit">答题信息</h4>
                        <li data-order="0" class="lis"><p>1</p></li>
                        <li data-order="0" class="lis"><p>1</p></li>
                        <li data-order="0" class="lis"><p>1</p></li>
                        <li data-order="0" class="lis"><p>1</p></li>
                        <li data-order="0" class="lis"><p>1</p></li>
                        <li data-order="0" class="lis"><p>1</p></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Tx from "../img/tx.png";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      tx: Tx,
      t1: "驾考模拟",
      p1: "第01号考台",
      t2: "考生信息",
    };
  },
  props: ["km"],
  computed: {
    ...mapState([
      'tks',
      
    ])
  },
};
</script>

<style lang="css">
.pos {
  position: relative;
}

.pos .tit {
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
.kt {
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: #4a4a4a;
  font-size: 16px;
  margin-bottom: 20px;
}
.user-info {
  text-align: center;
  height: 290px;
  padding: 20px 16px;
  margin-bottom: 22px;
}
.user-info img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
}
.user-info p {
  margin-bottom: 10px;
  font-size: 16px;
  color: #4a4a4a;
}
.kstm {
  height: 421px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding: 25px 20px;
  margin-bottom: 22px;
}
.kstm .tm-answer {
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
}


  .lis {
  width: 40px;
  height: 40PX;
  color: #4a4a4a;
  list-style: none;
  line-height: 40PX;
  border: 1px solid #eee;
  text-align: center;
  float: left;
  box-sizing: border-box;
  cursor: pointer;
}
</style>