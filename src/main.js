import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyDS0OGZPGPttzjghQ4Ry-kW21ELmfqzbos",
  authDomain: "vue-calendar-1e8f1.firebaseapp.com",
  databaseURL: "https://vue-calendar-1e8f1-default-rtdb.firebaseio.com",
  projectId: "vue-calendar-1e8f1",
  storageBucket: "vue-calendar-1e8f1.appspot.com",
  messagingSenderId: "260423871825",
  appId: "1:260423871825:web:7d40d25bf4ac98c5503770"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')