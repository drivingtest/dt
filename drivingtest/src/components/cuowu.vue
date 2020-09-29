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
                                <p><label for="">考试科目：</label> <span>科目一</span></p>
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
                            <h1 >{{  singles[now].title }}</h1>
                            <p class="mb-3 "     v-for="(a,index) in singles[now].ans"  :key="index">
                        {{String(Object.keys(a))}} : {{ String(Object.values(a)) }} 
                    </p>
                            <!-- <div class="option ">
                                <p>A：正确</p>
                                <p>B：错误</p>
                                </div> -->
                              <div class="tm-answer">
                    <div class="float-left sec-aswer">您的选项是：</div>
                    <div class="float-right aswer"><span class="float-left">请选择:</span>
                    <span class="pr-3"><button type="button" class="btn btn-outline-dark btn-sm "  
                    id="btn2"
                    @click="next"
                      >A</button></span>
                    <span><button type="button" 
                     class="btn btn-outline-dark btn-sm "
                      id="btn2"
                      @click="next">B</button></span>
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
                        <li v-if="isScore" data-order="0" class="lis"><p>{{total}}</p></li>
                        <li data-order="0" class="lis"><p>2</p></li>
                        <li data-order="0" class="lis"><p>3</p></li>
                        <li data-order="0" class="lis"><p>4</p></li>
                        <li data-order="0" class="lis"><p>5</p></li>
                        <li data-order="0" class="lis"><p>6</p></li>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>

<script>

import {mapState} from 'vuex';
export default {
  data() {
    return {
      t1: "驾考模拟",
      p1: "第01号考台",
      t2: "考生信息",

      results: new Map(),
      choose: [],
      finished: false,
      isScore: false,
      total: 0,
      now: 0,
      title: "计算属性和样式",
      singles: [
        {
          title: "最长的河?",
          ans: [
            { A: "尼罗河" },
            { B: "亚马逊河" },
          ],
          right: "B",
        },
        {
          title: "市值最高的公司?",
          ans: [
            { A: "中国移动" },
            { B: "阿里巴巴" },
            { C: "可口可乐" },
            { D: "苹果" },
          ],
          right: "D",
        },
        {
          title: "最流行的程序设计语言?",
          ans: [{ A: "java" }, { B: "c" }, { C: "c++" }, { D: "php" }],
          right: "A",
        },
      ],
    };
  },
  methods: {
    next(){
    //记录当前题的答案
      this.results.set(this.now, this.choose);
      console.log(this.results);
      this.now++;
      //已做过的题不清空选择
      if (this.results.get(this.now)) {
        this.choose = this.results.get(this.now);
      } else {
        this.choose = [];
      }

      if (this.now === 5) {
        this.finished = true;
      }
    },
    // up(isEnd) {
    //   if (this.now === 0) {
    //     return;
    //   }
    //   if (isEnd) {
    //     this.finished = false;
    //   }
    //   this.now--;
    //   //获得前一题已选择的答案
    //   this.choose = this.results.get(this.now);
    // },

    watch: {
    //监听choose属性值变化
    choose: function (newval, oldval) {
      if (newval.length > 0) {
        $("#btn2").prop("disabled", false);
      } else {
        $("#btn2").prop("disabled", true);
      }
    },
    now: function (newval, oldval) {
      if (newval > 0) {
        console.log("btn1启用", newval);
        $("#btn1").prop("disabled", false);
      } else {
        $("#btn1").prop("disabled", true);
      }
    },
  },
  score() {
      let count = 0;
      for (let entry of this.results) {
        if (this.muls[entry[0]].right.length === 1) {
          if (this.muls[entry[0]].right === entry[1]) {
            count++;
          }
        } else {
          if (this.muls[entry[0]].right.join("")=== entry[1].sort().join("")){
            count++;
          }
        }
      }
      this.total = (count / this.muls.length) * 100;
      this.total = this.total.toFixed(2);
      this.isScore = true;
    },
  },
  props: {
      list:Array
  },
        
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