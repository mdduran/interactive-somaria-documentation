<template>
	<b-form-checkbox @change="inputChange"/>
</template>

<script>
export default {
	name: "Dropdown",
	props: ['blockInput', 'blockInputIndex'],
	methods: {
		inputChange(value) {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value: value ? 1 : 0
			});
		}
	}
}
</script>