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
                            <Time/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card kstm pos">
                        <div class="card-body ">
                            <h4 class="card-title tit">考试题目</h4>
                            <p class="mb-3 ">{{ths[OneIndex].v}}、{{tks[sjs].ti}}</p>
                            <div class="option ">
                                <p v-for="(item, index) in tks[sjs].xx" :key="index">{{item}}</p>
                                </div>
                              <div class="tm-answer">
                    <div class="float-left sec-aswer">您的选项是：{{tks[sjs].xs}}</div>
                    <div class="float-right aswer"><span class="float-left">请选择：</span>
                    <span class="pr-3" v-for="(item, index) in tks[sjs].xx2" :key="index" >
                      <button type="button" class="btn btn-sm " :class="item.xuangS?'btn-outline-dark':item.class" @click="diXx(index)">{{item.name}}</button></span>
                    </div>
                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                              <div class="card  pos">
                        <div class="card-body ">
                            <h4 class="card-title tit">提示信息</h4>
                            <span class="tsxxt">{{tks[sjs].tis}}</span>
                    </div>
                </div>
                        </div>
                        <div class="col p-3">
                            <span class="pr-3 "><button type="button" class="btn btn-outline-primary  " @click="uoTi">上一题</button></span>
                            <span class="pr-3 "><button type="button" class="btn btn-outline-success  " @click="nextTi">下一题</button></span>
                            <span class="pr-3 "><button type="button" class="btn btn-outline-warning  " @click="over" >交卷</button></span>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title tit">答题信息</h4>
                        <li data-order="0" class="lis "  v-for="(item, index) in ths" :key="index" :class='item.class'><p>{{item.v}}</p></li>
                        </div>
                    </div>
                    <div class="q-detail pos fl" style="display: block; background-color: rgb(255, 253, 230);" v-if="tks[sjs].img!=''">
            <div class="tit" style="background-color: rgb(255, 253, 230);">图片信息</div>
            <img class="img-block" :src="tks[sjs].img" alt="">
        </div>
                </div>
            </div>

        </div>
</template>

<script>


import Time from '@/components/Time'


export default {
  components: {
    Time,
  },
  data() {
    return {
       tx:require('../assets/tx.png'),
      t1: "驾考模拟",
      p1: "第01号考台",
      t2: "考生信息",
      // 你选择的是
      xz:'',
      // 错题
      cuo:'bg-danger text-light',
      // 对题
      dui:'bg-success text-light',
      // 题号
      // 随机题库
      sjs:Math.round(Math.random()*10),
      ths:[
        {'v':1,'class':''},
        {'v':2,'class':''},
        {'v':3,'class':''},
        {'v':4,'class':''},
        {'v':5,'class':''},
        {'v':6,'class':''},
        {'v':7,'class':''},
        {'v':8,'class':''},
        {'v':9,'class':''},
        {'v':10,'class':''},
      ],
      // 选项样式
      xxClass:'btn-success',

      //题库
      tks:[
      {
        'ti':'申请人以不正当手段取得机动车驾驶证的，公安机关交通管理部门收缴机动车驾驶证，撤销机动车驾驶许可，申请人在3年内不得再次申领机动车驾驶证。',
        'xx':['A：正确','B：错误'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,}
          ],
        'daan':0,
        'img':'',
        'xs':'',
        'tis':'判断题，请判断对错！'
      },
      {
        'ti':'如图所示，A车在此处停车是可以的。',
        'xx':['A：正确','B：错误'],
          'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,}
          ],
        'xs':'',
        'daan':0,
        'img':require('../assets/pd1.png'),
        'tis':'判断题，请判断对错！'
      },
      {
        'ti':'停车位标线为蓝色的，表示该停车位为收费停车位。',
        'xx':['A：正确','B：错误'],
         'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,}
          ],
        'xs':'',
        'daan':1,
        'img':'',
        'tis':'判断题，请判断对错！'
      },
      {
        'ti':'车辆转弯时应沿道路右侧行驶，不要侵占对方的车道，做到“左转转大弯，右转转小弯”。',
        'xx':['A：正确','B：错误'],
         'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,}
          ],
        'xs':'',
        'daan':0,
        'img':'',
        'tis':'判断题，请判断对错！'
      },{
        'ti':'如下图所示的交通事故中，有关事故责任认定，正确的说法是什么？',
        'xx':['A：B车违反交通信号，所以B负全责','B：B车不得妨碍被放行的车辆，所以B车负全责','C：直行车辆不得妨碍左转车辆，所以A车负全责','D：右侧方向的车辆具有优先通行权，故B车负全责'],
         'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
        'xs':'',
        'daan':1,
        'img':require('../assets/dx1.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },{
        'ti':'路面上的黄色填充标线是何含义？',
        'xx':['A：接近移动障碍物标线','B：远离狭窄路面标线','C：接近障碍物标线','D：接近狭窄路面标线'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
        'xs':'',
        'daan':2,
        'img':require('../assets/dx2.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },{
        'ti':'如图所示，在这种情况下通过路口，交替使用远近光灯的目的是什么？',
        'xx':['A：提示其他交通参与者注意来车','B：检查灯光是否能正常使用','C：准备变更车道','D：超车前提示前车'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':require('../assets/dx3.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },{
        'ti':'驾驶人有下列哪种违法行为一次记6分？',
        'xx':['A：饮酒后驾驶机动车','B：使用其他车辆行驶证','C：车速超过规定时速50%以上','D：违法占用应急车道行驶'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':3,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },{
         'ti':'隐瞒有关情况或者提供虚假材料申请机动车驾驶证，申请人在多少年内不得再次申领机动车驾驶证？',
        'xx':['A：1年','B：2年','C：3年','D：4年'],
       'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },{
        'ti':'下列哪种证件是驾驶机动车上路行驶应当随车携带？',
        'xx':['A：机动车登记证','B：机动车保险单','C：机动车行驶证','D：出厂合格证明'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':2,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'机动车达到国家规定的强制报废标准的不能办理注册登记。',
        'xx':['A：正确','B：错误',],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':'',
        'tis':' 判断题，请判断对错！'
      },
       {
        'ti':'机动车仪表板上（如图所示）亮，表示驻车制动器操纵杆可能没松到底。',
        'xx':['A：正确','B：错误',],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':1,
        'img':require('../assets/js.jpg'),
        'tis':' 判断题，请判断对错！'
      },
      {
        'ti':'专用车道规定的专用使用时间之外，其他车辆可以进入专用车道行驶。',
        'xx':['A：正确','B：错误',],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':'',
        'tis':' 判断题，请判断对错！'
      },
      {
        'ti':'这个标志的含义是提醒车辆驾驶人前方路面颠簸或有桥头跳车现象。',
        'xx':['A：正确','B：错误',],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':require('../assets/dp.jpg'),
        'tis':' 判断题，请判断对错！'
      },
      {
        'ti':'看到这个标志的时候，您应该主动确认您与前车之间的距离',
        'xx':['A：正确','B：错误',],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':require('../assets/1280.jpg'),
        'tis':' 判断题，请判断对错！'
      },
      {
        'ti':'使用软连接牵引装置时，牵引车与被牵引车之间应当保持多远距离？',
        'xx':['A：小于0.5米','B：小于4米','C：大于4米小于10米','D：大于10米'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':2,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'下面哪个标志表示注意路面不平？',
        'xx':['A：图①','B：图②','C：图③','D：图④'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':1,
        'img':require('../assets/17.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'如图所示，驾驶机动车遇这种情形时，以下做法正确的是什么？',
        'xx':['A：鸣笛并继续直行','B：减速并随时准备停车','C：转向道路左侧并继续行驶','D：匀速驶过该区域'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':1,
        'img':require('../assets/18.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'雨天行车，遇撑雨伞和穿雨衣的行人在公路上行走时，应怎样做？',
        'xx':['A：以正常速度行驶','B：持续鸣喇叭示意其让道','C：加速绕行','D：提前鸣喇叭，并适当降低车速'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':3,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'这是什么操纵装置？',
        'xx':['A：灯光、信号组合开关','B：倒车灯开关','C：刮水器开关','D：危险报警闪光灯开关'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':require('../assets/20.jpg'),
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
      {
        'ti':'行车中需要借道绕过前方障碍物，但对向来车已接近障碍物时，应怎样做？',
        'xx':['A：降低速度或停车，让对向来车优先通行','B：加速提前抢过','C：鸣喇叭示意对向车辆让道','D：迅速占用车道，迫使对向来车停车让道'],
        'xx2':[
          {'name':'A','class':'','xuangS':true,},
          {'name':'B','class':'','xuangS':true,},
          {'name':'C','class':'','xuangS':true,},
          {'name':'D','class':'','xuangS':true,},
          ],
          'xs':'',
        'daan':0,
        'img':'',
        'tis':'单选题,请在备选答案中选择你认为正确的答案！'
      },
    ],
    
    OneIndex:0,
    };
  },

  props: ["km"],
 
  methods: {
    // 上一题
    uoTi:function(){
      if(this.OneIndex == 0){
        alert('已经是第一题了！');
      }else{
        this.sjs=this.sjs-1;
        this.OneIndex=this.OneIndex-1;
      }
    },
    // 下一题
    nextTi:function(){
     if(this.OneIndex == 9){
       alert('已经是最后一题了');
     }else{
       this.sjs=this.sjs+1;
       this.OneIndex=this.OneIndex+1;
     }
    },
    // 选中答案后发生的事
    diXx:function(i){
      // 显示选中效果
      this.tks[this.sjs].xx2[i].xuangS=!this.tks[this.sjs].xx2[i].xuangS
      if(this.tks[this.sjs].xx2[i].xuangS){
        this.tks[this.sjs].xx2[i].class='';
        this.tks[this.sjs].xs='';
      }else{
        this.tks[this.sjs].xx2[i].class=this.xxClass;
        this.tks[this.sjs].xs=this.tks[this.sjs].xx2[i].name;
      }
      
    //  显示对错
    if(i==this.tks[this.sjs].daan){
      this.ths[this.OneIndex].class=this.dui;
      this.$store.state.jilu.push(10);
      // 跳下一题效果
      if(this.OneIndex == 9){
       alert('已经是最后一题了');
       this.ths[this.OneIndex].class=this.dui;
     }else{
       this.sjs=this.sjs+1;
       this.OneIndex=this.OneIndex+1;
     }
    }else{
      this.ths[this.OneIndex].class=this.cuo;
      this.$store.state.cuoti.push(this.tks[this.sjs]);
      this.$store.state.jilu.push(0);
      if(this.OneIndex == 9){
       alert('已经是最后一题了');
       this.ths[this.OneIndex].class=this.cuo;
     }else{
       this.sjs=this.sjs+1;
       this.OneIndex=this.OneIndex+1;
     }
    }
    },
    // 答题结束
    over:function(){
      this.$router.push('/over');
      var zcj=0;
      for(let i=0;i<10;i++){
        console.log(this.$store.state.jilu[i]);
        zcj+=this.$store.state.jilu[i];
      }
      this.$store.state.zongcj=zcj;
      if(zcj<80){
        this.$store.state.isJige=false;
      }else{
        this.$store.state.isJige=true;
      }
    },
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

/* 图片信息 */
    
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
    height: 275px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 25px 0;
}
.q-detail img {
    width: 250px;
    height: 200px;
    display: block;
    margin: 0 auto;
}
</style>