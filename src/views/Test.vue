<template>
    <div id="test">
        <list-view></list-view>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ListView from '@/components/ListView.vue';

@Component({
	components: {
		ListView
	}
})
export default class Test extends Vue {

}
</script>

<style scoped lang="less">
    #test {
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
    }
</style>
