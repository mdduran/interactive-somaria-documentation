<template>
    <component :is="component" :blockInput="blockInput" :blockInputIndex="blockInputIndex" v-if="component" />
</template>

<script>
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
            
            return () => import(`@/components/property-panel/${componentName}`)
        },
    },
    mounted() {
        this.loader()
            .then(() => {
                this.component = () => this.loader()
            })
    },
}
</script>