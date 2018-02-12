<template>
        <div>
            <h1>{{ upCase() }}</h1>
        </div>
</template>
<script>
    export default {
        props: {
            name: {
                type: String,
                require: true,
                default: function () {
                    return {}
                }
            }
        },
        methods: {
            upCase () {
                return this.name.toUpperCase()
            }
        }
    };
</script>
