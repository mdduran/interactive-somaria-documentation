<template>
	<canvas ref="canvas" width="300" height="300" style="width:300px;height:300px"></canvas>
</template>

<script>
export default {
	name: "Drawable",
	props: ['blockType'],
	watch: {
		blockType( newBlockType ) {
			console.log( "watcher" );
			const visualization = new somaria( {}, {
				type: "MacroDrawable",
				blocks: [
					{
						type: newBlockType.name,
						id: "drawable0",
						inputs: newBlockType.inputs.map( input => ( { accessType: "Value", value: input.value } ) )
					}
				],
				drawables: [ "drawable0" ]
			}, this.$refs.canvas );
			visualization.render();
		}
	}
}
</script>
