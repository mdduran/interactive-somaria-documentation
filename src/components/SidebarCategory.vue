<template>
	<div>
		<h3 class="category-title"> {{this.title}} </h3>
		<ul>
			<li v-for="entry in types" v-bind:key="entry[0]"> {{entry[0]}} </li>
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
	}
}
</script>

