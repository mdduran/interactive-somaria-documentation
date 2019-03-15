<template>
	<div class="preview-panel">
		<PreviewPanelDisplay :blockType="blockType"/>
	</div>
</template>

<script>
import PreviewPanelDisplay from "./PreviewPanelDisplay";
export default {
	name: 'PreviewPanel',
	components: {
		PreviewPanelDisplay
	},
	computed: {
		blockType() {
			return this.$store.getters.getCurrentBlockType;
		}
	}
}
</script>

<style>

</style>