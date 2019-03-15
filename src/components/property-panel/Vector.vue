<template>
	<div class="vector-input row">
		<label class="flex-none">X</label>
		<b-form-input class="flex-1" :type="'number'" v-model="vectorX" @change="inputChange"/>
		<label class="flex-none">Y</label>
		<b-form-input class="flex-1" :type="'number'" v-model="vectorY" @change="inputChange"/>
		<label class="flex-none">Z</label>
		<b-form-input class="flex-1" :type="'number'" v-model="vectorZ" @change="inputChange"/>
	</div>
</template>

<script>
export default {
	name: "Text",
	props: ['blockInput', 'blockInputIndex'],
	data() {
		return {
			vectorX,
			vectorY,
			vectorZ
		};
	},
	methods: {
		inputChange() {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value: new THREE.Vector3( parseFloat( this.vectorX ), parseFloat( this.vectorY ), parseFloat( this.vectorZ ) )
			});
		}
	}
}
</script>

<style>
	.vector-input {
		align-items: center;
		padding: 0 1em;
	}
	.vector-input > label {
		margin: 0;
		padding: 0 0.5em;
	}
</style>