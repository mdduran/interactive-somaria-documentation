<template>
	<component :is="component" :blockType="blockType" v-if="component" />
</template>

<script>
export default {
	name: 'PropertyPanelInput',
	props: ['blockType'],
	data() {
		return {
			component: null
		}
	},
	computed: {
		loader() {
		console.log("loading?");
			if (!this.blockType) {
				return;
			}

			if( this.blockType.category === "Drawable" ) {
				return () => import(`@/components/preview-panel/Drawable`);
			}
		},
	},
	mounted() {
		this.loader && this.loader().then(() => {
			this.component = () => this.loader()
		});
	},
}
</script>