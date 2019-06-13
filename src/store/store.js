// see https://github.com/kenberkeley/vue-state-management-alternative

// 用于保存服务端信息到 sessionStorage 的键
const SERVER_INFO_NAME = 'SERVER_INFO_NAME';

const ShareData = {
  userData: { // 用户数据
    name: '',
    number: ''
  },
  serverInfo: JSON.parse(sessionStorage.getItem(SERVER_INFO_NAME)) // 服务器信息
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
    /**
     * 写入服务端数据到 store 中
     * @param {object} fetchedData 作为服务端的数据
     */
    setServerInfo(fetchedData){
      sessionStorage.setItem(SERVER_INFO_NAME,JSON.stringify(fetchedData));
      this.serverInfo = fetchedData;
      // this.$set(this.$data, 'serverInfo', fetchedData);
    }
  }
};