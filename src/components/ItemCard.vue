<template>
    <div id="item-card">
        <div class="card-header">
            <div class="card-user-img">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="card-title">
                我是标题
            </div>
        </div>
        <div class="card-content">
            <img src="../assets/images/img_njyy_1.png" alt="">
        </div>
        <div class="card-footer">
            <span class="time">2019-01-18 10:16</span>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class ItemCard extends Vue {

}
</script>

<style scoped lang="less">
    #item-card {
        width: 100%;
        border-radius:5px;
        border: 1px solid #e8e8e8;
        background: #fff;

        .card-header {
            height: 45px;
            display: flex;
            align-items: center;
            padding-left: 15px;
            .card-user-img{
                width: 35px;
                height: 35px;
                border: 1px solid #e8e8e8;
                border-radius:35px;
                overflow: hidden;
                img{
                    width: 35px;
                    height: 35px;
                }
            }
            .card-title{
                margin-left: 8px;
            }
        }
        .card-content {
            height: 150px;
            img{
                height: 150px;
                width: 100%;
            }
        }
        .card-footer {
            height: 35px;
            display: flex;
            align-items: center;
            font-size: 12px;
            padding-left: 15px;
        }
    }

</style>
