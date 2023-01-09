<template>
    <v-content class="h_box mx-auto max-w v-jcsb">
        <img :src="logoImg" alt="logo"
             class="logo">
        <nav v-if="navShow" 
        @click.self="this.navShow = false"
            :class="this.navShow = true ?  'action' : ''">
            <div class="nav_box">
                <div class="arrow">
                    <v-icon 
                        @click="this.navShow = false"
                        class="left"
                    >mdi-chevron-left</v-icon>
                </div>
                <ul>
                    <li v-for="(nav, index) in navList" 
                        :key="index"
                        class="cp nav_list"
                        @click="currentNav( current = index )">
                        {{ nav }}
                        <ul class="subMenu" 
                            v-if="index === 1 || index === 2 ? 
                            this.sub = true : this.sub = false"
                        >
                            <div v-if="index == this.current">
                                <li v-for="(sub, i) in subList" :key="i"
                                    @click="pagePush(sub)"> {{ sub }} </li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="icon_box">
            <v-icon 
                class="cp menu"
                @click="this.navShow = !this.navShow">mdi-menu</v-icon>
            <v-icon class="cp user_icon"
                @click="this.none = !this.none">
                mdi-account-heart
            </v-icon>
            <ul v-show="none" class="logout">
                <li class="cp" @click="Logout">로그아웃</li>
            </ul>
        </div>
    </v-content>
</template>

<script>
export default {
    name:'MainHeader',
    data(){
        return{
            logoImg: require('@/assets/image/logo.png'),
            navList: ['스냅샷','행사','혜택','관리자 계정','관리자 혜택 설정'],
            subList: [],
            sub : false,
            navShow: false,
            none: false,
            current : '',
        }
    },
    methods: {
        Logout() {
            this.$router.push('/home');
        },
        currentNav(e){
            switch(e) {
                case 0 : 
                this.$router.push('/snapshot');
                this.navShow = false;
                break;
                case 1 :
                this.subList = ['행사 등록','초청자 등록'];
                break;
                case 2 : 
                this.subList = ['구매 혜택', '등급 혜택', '보유 혜택']; 
                break;
                case 3 : 
                this.$router.push('/snapshot');
                break;
                case 4 : 
                this.$router.push('/snapshot');
                break;
            }
        },
        pagePush(e){
            if(e === '행사 등록'){
                console.log('행사 등록')
            }else if(e === '초청자 등록'){
                console.log('초청자 등록')
            }else if(e === '구매 혜택'){
                console.log('구매 혜택')
            }else if(e === '등급 혜택'){
                console.log('등급 혜택')
            }else{
                console.log('보유 혜택')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.h_box{
    align-items: center;
    height: 30%;
    line-height: 3.5;
    .logo{
        width: 15%;
    }
}

.user_icon, .menu{
    margin: 0 10px;
}

nav{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: -100%;
    overflow: hidden;
    z-index: 99;
    color: #ef4423;
    background: rgba(0,0,0,0.5);
    .nav_box{
        width: 30%;
        height: 100%;
        position: absolute;
        right: 0;
        background: #fff;
        .left{
            padding: 0 10px;
            font-size: 25px;
        }
        ul{
            li{
                padding: 0 10px;
                font-weight: bold;
                &:hover{
                    transition: 0.5s;
                    background: rgb(239, 70, 37,0.2);
                }
            }
        }
    }
}

nav.action{
    right: 0;
    z-index: 999;
}

.icon_box{
    position: relative;
    .logout{
        width: 100%;
        height: 30px;
        position: absolute;
        top: 70%;
        left: 30%;
        line-height: 3;
        background: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 3px 0.5px rgba(0,0,0,0.3);
        color: #000;
        font-size: 0.7rem;
        text-align: center;
        li{
            font-weight: bold;
        }
    }
}
@media all and (max-width: 480px) {
    .h_box{
        .logo{
            width: 25%;
            margin-left: 5%;
        }
    }
    nav{
        .nav_box{
            width: 100%;
        }
    }
}
</style>