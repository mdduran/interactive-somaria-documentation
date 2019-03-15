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
		},
		setBlockInputValue: (state, { index, value }) => {
			state.currentBlockType.inputs[index].value = value;
		}
	},
	getters: {
		getCurrentBlockType: state => {
			return state.currentBlockType;
		},
		getCurrentBlockClass: state => {
			return window.somaria.BlockTypes.get( state.currentBlockType.name );
		}
	}
});