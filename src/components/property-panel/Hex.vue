<template>
	<b-form-input :type="'color'" @change="inputChange"/>
</template>

<script>
export default {
	name: "Hex",
	props: ['blockInput', 'blockInputIndex'],
	methods: {
		inputChange(value) {
			if( value.startsWith( "#" ) ) {
				value = value.slice( 1 );
			}
			this.$store.commit('setBlockInputValue', {
				index: this.blockInputIndex,
				value: parseInt(value, 16)
			});
		}
	}
}
</script>
