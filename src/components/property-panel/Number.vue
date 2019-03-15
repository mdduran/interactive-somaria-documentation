<template>
	<b-form-input :type="'number'" v-model="value" @change="inputChange"/>
</template>

<script>
export default {
	name: "Number",
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
				value: parseFloat(this.value)
			});
		}
	}
}
</script>
