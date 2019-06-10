<docs>
  props:
    index:number // 专业结构树的深度
    source:Array|Object // 当前树节点
  event:
    picked(index:number,picked:string):void // 当选择框被选中的时候触发

</docs>
<template>
  <mu-paper class="choice-detail-item" :z-depth="2">
    <h4>{{ endOfTree ? '专业细化' : '选择专业' }}</h4>
    <mu-select v-model="picked" full-width @change="handleSelectChange">
      <mu-option v-for="major of items" :key="major" :label="major" :value="major"></mu-option>
    </mu-select>
    <mu-button v-if="endOfTree" :disabled="!couldUpload">提交</mu-button>
  </mu-paper>
</template>
<script>
export default {
  name: "choice-detail-item",
  props: {
    index: Number,
    source: [Object, Array]
  },
  data() {
    return {
      picked:''
    };
  },
  methods: {
    handleSelectChange(value) {
      // 只有不在末位节点上才会触发选择事件
      if(!this.endOfTree){
        this.$emit('picked',this.index,this.picked);
      }
    }
  },
  computed: {
    /**
     * 专业树的节点是数组, 就表示用户需要在数组中选择最后一个内容
     */
    endOfTree() {
      return Array.isArray(this.source);
    },
    items() {
      return this.endOfTree ? this.source : Object.keys(this.source);
    },
    /**
     * 专业可以提交,只有在末节点且选择的内容才可以进行提交内容
     */
    couldUpload(){
      return this.endOfTree && !!this.picked;
    }
  }
};
</script>
<style>
.choice-detail-item{
  padding:.5rem;
}
</style>


