<template>
<div> 
    <v-chooser v-if="chooseType=='radio'" :chooseData="chooseData" @onChange="chooseChange"></v-chooser>
    <v-multiplyChooser v-if="chooseType=='check'" :chooseData="chooseData" @onChange="chooseChange"></v-multiplyChooser>
</div>
</template>

<script>
import  vChooser from './chooser'
import vMultiplyChooser from './multiplyChooser'
export default {
    props:{
        chooseData:{
            type:Array,
            defalut:[]
        },
        chooseType:{
            type:String,
            defalut:'radio'
        }
    },
    components:{
        vChooser,
        vMultiplyChooser
    },
    methods:{
        chooseChange(index){
            this.$emit('onChange',index)
        }
    }
}
</script>

<style>
.radio{
    display:inline-block;
    padding:5px 15px;
    border:1px solid #eee;
    border-radius:5px;
    margin-right:10px;
    cursor: pointer;
}
.click{
 color:white;
 background:#4fc08d;
}
</style>
