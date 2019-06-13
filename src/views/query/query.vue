<template>
  <index-layout class="query">
    <template #navbar-area>
      <i-navbar></i-navbar>
    </template>
    <template #content-area>
      <mu-container class="query-content">
        <mu-row v-if="hasResult">
          <mu-col span="12">
            <mu-paper class="result-panel" :z-depth="2">
              <p>已选择的专业:</p>
              <h4 v-for="item in fetchData.picked" :key="item">{{item}}</h4>
              <p>该专业属于:</p>
              <h4>{{fetchData.speciality}}</h4>
            </mu-paper>
          </mu-col>
        </mu-row>
        <mu-row v-if="nonResult">
          <mu-col span="12">
            <mu-paper class="result-panel" :z-depth="2">
              <h3>还没有选择专业?马上添加一个吧🎉</h3>
            </mu-paper>
          </mu-col>
        </mu-row>
        <mu-row>
          <mu-col span="12">
            <mu-button to="/">返回首页</mu-button>
          </mu-col>
        </mu-row>
      </mu-container>
    </template>
  </index-layout>
</template>
<script>
import iNavbar from "@/components/i-navbar";
import indexLayout from "../index/index-layout";
import { store } from "../../store/store.js";
import { Networking, BeforeFetch, AfterFetch } from "../../utils/interface.js";
import { axios } from "../../plugins/axios.js";

export default {
  name: "query",
  mixins: [store, Networking, BeforeFetch, AfterFetch],
  components: {
    iNavbar,
    indexLayout
  },
  data() {
    return {
      fetchData: {
        speciality: "",
        specialityPath: [],
        picked: ""
      },
      nonResult: false
    };
  },
  methods: {
    fetch() {
      if (this.networking) {
        return;
      }

      this.beforeFetch();

      axios
        .get("/student/result", {
          params: this.userData
        })
        .then(response => {
          if (response) {
            this.fetchData = response.data.data;
          } else {
            this.nonResult = true;
          }
        })
        .finally(() => this.afterFetch());
    }
  },
  computed: {
    hasResult() {
      return this.fetchData.speciality && this.fetchData.picked;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style>
.query .query-content > .row + .row {
  margin-top: 1rem;
}

.query .result-panel {
  padding: 0.5rem 1rem;
}
</style>


