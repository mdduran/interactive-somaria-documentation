<template>
	<b-form-input :type="'text'" @change="inputChange"/>
</template>

<script>
export default {
	name: "Text",
	props: ['blockInput', 'blockInputIndex'],
	methods: {
		inputChange(value) {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value
			});
		}
	}
}
</script>
