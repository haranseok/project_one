<template>
    <v-container class="h_box mx-auto">
        <img :src="img" alt="">
        <nav>
            <ul>
                <li v-for="(nav, index) in navList" 
                    :key="index"
                    @click="currentNav($event)">
                    {{ nav }}
                    <ul class="subMenu">
                        <li></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div>
            icon
        </div>
    </v-container>
</template>

<script>
export default {
    name:'MainHeader',
    data(){
        return{
            img: require('@/assets/image/logo.png'),
            navList: ['인증','스냅샷','행사','혜택','관리자 계정','관리자 혜택 설정']
        }
    },
    methods: {
        currentNav(event){
            console.log(event)
        }
    }
}
</script>

<style lang="scss" scoped>
.h_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    line-height: 3.5;
    img{
        width: 8%;
    }
}

nav{
    ul{
        display: flex;
        li{
            margin: 0 5px;
        }
    }
}
</style>