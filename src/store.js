import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    country: Object,
    countryrandom: [5,25,89,200],
    color:[{background:''},{'background':''},{'background':''},{'background':''}],
    trueCtry: null,
    button: false,
    nextButton: false,
    score: 0,
    select: true,
    flag: false
  },
  mutations: {
    addCountry: (state, value) => {
      state.country = value;
    },
    creates: state => {
      console.log("deneme")
      let i;
      for(i = 0; i < 4; i++){
        let err = Math.floor(Math.random() * 250);//Some country has not a capital.
        if(!state.country[err].capital){err = err + 1}
        state.countryrandom[i] = err;
        console.log("değişti: ", state.countryrandom[i])
      }
      state.trueCtry = Math.floor(Math.random()*4)
      console.log(state.countryrandom)
      
    },
    change: state =>{
      state.button = false;
      let change = Math.random() < 0.5
      state.select = change;
      state.flag = !change;
    },
    reset: state => {//state.color.foreach dene olmaz
      state.color[0].background = ''
      state.color[1].background = ''
      state.color[2].background = ''
      state.color[3].background = ''
    }

  }
  /*
  getters: {
    firstMessage: state => {
      return state.message;
    }
  },
  mutations: {
    changeMessage: (state, value) => {
      state.message = value;
    }
  },
  actions: {
    triggerChangeMessage: (context, value) => {
      context.commit("changeMessage", value);
    }
  }*/
});