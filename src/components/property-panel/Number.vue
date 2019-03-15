<template>
	<b-form-input :type="'number'" @change="inputChange"/>
</template>

<script>
export default {
	name: "Number",
	props: ['blockInput', 'blockInputIndex'],
	methods: {
		inputChange(value) {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value: parseFloat(value)
			});
		}
	}
}
</script>



