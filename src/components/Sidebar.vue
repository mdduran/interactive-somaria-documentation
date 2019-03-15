<template>
	<b-container fluid class="my-2 sidebar">
		<b-row>
			<h3>Block types</h3>
		</b-row>
		<b-row v-for="entry in categories" v-bind:key="entry[0]">
			<SidebarCategory v-bind:title="entry[0]" v-bind:blockTypes="entry[1]"/>
		</b-row>
	</b-container>
</template>

<script>
import BlockCategories from '@/assets/block-types-data.js'
import SidebarCategory from '@/components/SidebarCategory'
export default {
	name: 'Sidebar',
	components: {
		SidebarCategory
	},
	data() {
		return {
			categories: Array.from(BlockCategories)
		}
	}
}
</script>

<style>
</style>