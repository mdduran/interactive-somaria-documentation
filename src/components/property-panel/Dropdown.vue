<template>
	<b-form-select :options="options" v-model="value" @change="inputChange"/>
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
				value: this.value
			});
		}
	},
	computed: {
		options() {
			return this.blockInput.valid.map( ( { name: text, value } ) => ( { text, value } ) );
		}
	}
}
</script>