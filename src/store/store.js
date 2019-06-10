// see https://github.com/kenberkeley/vue-state-management-alternative

const ShareData = {
  userData: { // 用户数据
    name: '',
    number: ''
  },
  serverInfo:undefined // 服务器信息
};

export const store = {
  data: () => ShareData,
  computed: {
    hasUserData() {
      if (this.userData.name && this.userData.number) {
        return true;
      } else {
        return false;
      }
    },
    hasServerInfo(){
      return !!this.serverInfo;
    }
  },
  methods: {
    setUserData(name, number) {
      this.userData.name = name;
      this.userData.number = number;
    },
    setServerInfo(fetchedData){
      this.$set(this.$data, 'serverInfo', fetchedData)
    }
  }
};