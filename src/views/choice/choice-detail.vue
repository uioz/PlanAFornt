<template>
  <mu-container class="choice-detail">
    <mu-row v-for="(item,index) in modelPath" :key="index+item">
      <mu-col span="12">
        <choice-detail-item :index="index" :source="item" @picked="handleItemPicked"></choice-detail-item>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<script>
import choiceDetailItem from "./choice-detail-item";

export default {
  name: "choice-detail",
  props: {
    source: Object
  },
  components: {
    choiceDetailItem
  },
  data() {
    return {
      /**
       * 使用数组下标保存树深度和位置
       *
       * 值保存选择的内容
       */
      modelPath: [this.source]
    };
  },
  methods: {
    /**
     * 末节点不会触发, 返回列表渲染时候传入的 index
     *
     * 两种情况:
     * 1. 插入一个新的节点, 只要 --modelPath.length == index 情况下插入新结点, 也就是尾部节点选择
     * 2. 修改已有节点, 该节点后的内容都需要被移除
     * **注意**:末节点不会触发该事件, 不需要考虑末节点修改的情况
     */
    handleItemPicked(index, field) {
      if (this.modelPath.length - 1 === index) {
        // 从index节点中获取内容插入到节点路径尾部
        this.modelPath.push(this.modelPath[index][field]);
      } else {
        //slice:start end(不包括end中的内容,所以需要加一)
        const piceOfModelPath = this.modelPath.slice(0, index + 1);
        // 添加一个新的节点, 是前面节点树的新内容
        piceOfModelPath.push(
          piceOfModelPath[piceOfModelPath.length - 1][field]
        );
        this.modelPath = piceOfModelPath;
      }
    }
  },
  computed: {
    /**
     * 计算可以选择的内容也就是树的节点
     */
    nextNode() {
      let i = 0,
        len = this.modelPath,
        result = this.source;

      while (i < len) {
        result = result[this.modelPath[i]];

        i++;
      }

      return result;
    }
  }
};
</script>
<style>
</style>


