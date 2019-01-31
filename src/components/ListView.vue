<template>
    <div id="list">
        <div class="container">
            <div class="listContainer">
                <item-card></item-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ItemCard from "@/components/ItemCard.vue";

@Component({
	components: {
	    ItemCard,
	},
})
export default class ListView extends Vue {}
</script>

<style scoped lang="less">
    #list {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
        .container {
            height: 100%;
            padding: 5px;
            .listContainer {
                height: 100%;
            }
        }
    }
</style>
