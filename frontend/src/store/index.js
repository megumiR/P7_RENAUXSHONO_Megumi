import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    roll: null,   
    imageFile: null,
    token: localStorage.getItem('token') || '',
    status: ''
  },
  getters: {
  //  Stateimagefile: state => { return state.imageFile }, 
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
  //  setImagefile (state, imageFile) { state.imageFile = imageFile }
    sendSigninform: (state) => {
      state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    AUTH_ERROR: (state) => {
      state.status = 'error'
    }

  },
  actions: { //https://openclassrooms.com/en/courses/6390311-creez-une-application-web-avec-vue-js/6870776-modifiez-vos-donnees-dans-vuex
 /*   logIn: ({ commit }, payload) => {
   */   
    sendSigninform: ({commit, dispatch}, userInfos) => {

      return new Promise ( (resolve, reject) => {
        commit;
        console.log('userInfos');
        console.log(userInfos);
        instance.post('/signup', userInfos)
          .then(function(response) {
            console.log(response);
            const token = response.data.token;
            console.log(token);  //token defined
            localStorage.setItem('token', token);
            commit('AUTH_SUCCESS', token);
            dispatch()
            resolve(response)
          })
          .catch(function(err) {
           // console.log(err);
            commit('AUTH_ERROR', err);
            localStorage.removeItem('token');
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})

/*
login: function() {
  this.$store.dispatch('login', {
    utilisateur: this.utilisateur,
    email: this.email,
    password: this.password
  })
  .then( function (res) {
    console.log(res);
  }).catch( err => {
    throw err;
  })*/