<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText" class="select-input--material">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
  import { fruitMixin } from '@/mixin/fruitMixin';

    export default {
        mixins: [fruitMixin],
        created() {
            //console.log('Inside List Created Hook');
        }
    }
</script>

<style>
</style>
