<template>
	<b-form-select :options="options" @change="inputChange"/>
</template>

<script>
export default {
	name: "Dropdown",
	props: ['blockInput', 'blockInputIndex'],
	methods: {
		inputChange(value) {
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value
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