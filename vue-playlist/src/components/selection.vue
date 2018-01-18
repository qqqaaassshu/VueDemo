<template>
  <div>
      <div class="select" @click="listShow">
          <span>{{data[index].options}}</span>
          <i :class="[isShow?'bottom':'top']"></i>
          <ul class="list" v-show="isShow">
          <li v-for="(item,index) in data" @click="options(index)">{{item.options}}</li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            defalut:[]
        }
    },
    data(){
        return {
            isShow:false,
            index:0
        }
    },
    methods:{
        listShow(){
            this.isShow = !this.isShow;
        },
        options(index){
            this.index = index
            this.$emit('onchange',index)
        }
    }
}
</script>

<style scoped>
.select{
    display:inline-block;
    position: relative;
    height:15px;
    padding:5px 25px 5px 10px;
    border:1px solid #eee;
    border-radius:3px;
    cursor: pointer;
}
.select i{
    position:absolute;
    top:5px;
    right:10px;
    display:block;
    width:0;
    height:0;
    border-width:5px 5px;
    border-color:transparent;
    border-style:solid
}
.select .top{
    border-bottom-color:#eee;
}
.select .bottom{
    margin-top:5px;
    border-top-color:#eee;
}
.list{
    position: absolute;
    top:24px;
    left:-1px;
    width:100%;
    border:1px solid #eee;
    border-top-color:transparent
}
.list li{
    padding:5px 10px;
}
.list li:hover { 
    background:#999
}
</style>
