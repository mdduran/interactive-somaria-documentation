<template>
	<b-form-input :type="'color'" v-model="value" @change="inputChange"/>
</template>

<script>
export default {
	name: "Hex",
	props: ['blockInput', 'blockInputIndex'],
	data() {
		const defaultValue = this.$store.getters.getCurrentBlockClass.getDefaultInputValues( { meshColor: 0x34495E } )[ this.blockInputIndex ];
		return {
			value: "#" + ( "000000" + defaultValue.toString(16) ).slice(-6)
		};
	},
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
