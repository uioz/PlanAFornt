// see https://github.com/kenberkeley/vue-state-management-alternative

const ShareData = {
  count:1
};

export const store = {
  data: () => ShareData,
  methods:{
    increase(){
      return this.count++;
    },
    decrease(){
      return this.count--;
    }
  }
};