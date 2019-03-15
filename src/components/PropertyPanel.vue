<template>
	<b-container fluid>
		<b-row v-for="(blockInput, index) in this.$store.getters.getCurrentBlockType.inputs" :key="blockInput.name">
			<b-col cols=3>
				<label> {{blockInput.name}} </label>
			</b-col>
			<b-col>
				<PropertyPanelInput :blockInput="blockInput" :blockInputIndex="index"/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import PropertyPanelInput from '@/components/PropertyPanelInput'
export default {
	name: 'PropertyPanel',
	components: {
		PropertyPanelInput
	}
}
</script>

<style>

</style>