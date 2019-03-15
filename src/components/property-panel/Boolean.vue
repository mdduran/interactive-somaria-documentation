<template>
	<b-form-checkbox v-model="value" @change="inputChange"/>
</template>

<script>
export default {
	name: "Dropdown",
	props: ['blockInput', 'blockInputIndex'],
	data() {
		const defaultValue = this.$store.getters.getCurrentBlockClass.getDefaultInputValues( {} )[ this.blockInputIndex ];
		return {
			value: defaultValue
		};
	},
	methods: {
		inputChange() {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value: this.value ? 1 : 0
			});
		}
	}
}
</script>