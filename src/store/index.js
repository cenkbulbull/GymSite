import { createStore } from 'vuex'
import BelgeGetir from "../composables/BelgeGetir"

/*const {documents:ayar} = BelgeGetir("ayar")
const {documents:hizmet} = BelgeGetir("hizmet")
const {documents:paket} = BelgeGetir("paket")
const {documents:alan} = BelgeGetir("alan") */

export default createStore({
  state: {
    ayarlar:null,
    hizmetler:null,
    paketler:null,
    alanlar:null
  },
  getters: {
    getStateAyar(state){
      return state.ayarlar
    },
    getStateHizmet(state){
      return state.hizmetler
    },
    getStatePaket(state){
      return state.paketler
    },
    getStateAlan(state){
      return state.alanlar
    }
  },
  mutations: {
    setStateAyar(state,data){
      state.ayarlar=data
    },
    setStateHizmet(state,data){
      state.hizmetler=data
    },
    setStatePaket(state,data){
      state.paketler=data
    },
    setStateAlan(state,data){
      state.alanlar=data
    }
  },
  actions: {
    setMutationAyar(context,data){
      context.commit("setStateAyar",data)
    },
    setMutationHizmet(context,data){
      context.commit("setStateHizmet",data)
    },
    setMutationPaket(context,data){
      context.commit("setStatePaket",data)
    },
    setMutationAlan(context,data){
      context.commit("setStateAlan",data)
    }
  },
})
