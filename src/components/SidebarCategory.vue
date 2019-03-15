<template>
	<div>
		<h4 class="category-title"> {{this.title}} </h4>
		<ul>
			<li class="block-type" v-for="entry in types" v-bind:key="entry[0]" @click="setBlockType(entry[1])"> {{entry[0]}} </li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "SidebarCategory",
	props: ["title", "blockTypes"],
	data() {
		return {
			types: Array.from(this.blockTypes)
		}
	},
	methods: {
		setBlockType( key ) {
			this.$store.commit('setCurrentBlockType', key);
		}
	}
}
</script>

<style>
	.block-type:hover {
		cursor: pointer;
		text-decoration: underline;
	}
</style>


