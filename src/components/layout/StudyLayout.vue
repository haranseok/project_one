<template>
    <div class="p4p">
        <h1>study</h1>
        <ul class="m0-auto">
            <router-link to="/study/chartlayout">            
                <li>chart</li>
            </router-link>
            <router-link to="/study/datepickerLayout">
                <li>datepicker</li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
h1{
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
}

ul{
    width: 50%;
    padding: 5%;
    display: flex;
    li{
        font-size: 1.2rem;
        margin: 0 5px;
    }
}
</style>