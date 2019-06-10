export const Networking = {
  data(){
    return {
      networking:false
    }
  }
}

export const BeforeFetch = {
  methods:{
    beforeFetch(){
      this.networking = true;
    }
  }
}

export const AfterFetch = {
  methods:{
    afterFetch(){
      this.networking = false;
    }
  }
}

