<template>
    <component :is="component" :blockInput="blockInput" v-if="component" />
</template>

<script>
export default {
    name: 'PropertyPanelInput',
    props: ['blockInput'],
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
            return () => import(`@/components/property-panel/${this.blockInput.type}`)
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