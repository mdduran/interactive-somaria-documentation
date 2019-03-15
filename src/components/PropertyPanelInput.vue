<template>
    <component :is="component" :blockInput="blockInput" :blockInputIndex="blockInputIndex" v-if="component" />
</template>

<script>
const supportedInputs = new Set(["Text", "Boolean", "Number", "Hex"]);
export default {
    name: 'PropertyPanelInput',
    props: ['blockInput', 'blockInputIndex'],
    data() {
        return {
            component: null,
        }
    },
    computed: {
        loader() {
            if (!this.blockInput) {
                return null
            }
            
            let componentName = this.blockInput.type;
            
            if( componentName === "Text" && this.blockInput.valid ) {
                componentName = "Dropdown";
            }
            else if( componentName === "Angle" || componentName === "Point" ) {
                componentName = "Vector";
            }
            else if(supportedInputs.has(componentName)) {
                return () => import(`@/components/property-panel/${componentName}`)
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