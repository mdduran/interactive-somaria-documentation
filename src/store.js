import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentBlockType: {}
	},
	mutations: {
		setCurrentBlockType: (state, blockType) => {
			state.currentBlockType = blockType;
		}
	},
	getters: {
		getCurrentBlockType: state => {
			return state.currentBlockType;
		}
	}
});