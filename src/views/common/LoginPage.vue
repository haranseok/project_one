<template>
    <v-card class="card_box">
        <div class="login_header v-jcsb">
            <p>metakingz admin</p>
            <img :src="img" alt="">
        </div>
        <v-container class="inputBox application--light">
            <v-text-field
                v-model="login.id"
                label="id"
                color="deep-orange"
                :rules="idrules"
            />
            <v-text-field
                v-model="login.pw"
                color="deep-orange"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :pwrules="[pwrules.required, pwrules.min]"
                :type="show ? 'text' : 'password'"
                label="password"
                @keydown.enter="loginSend"
                @click:append="show = !show" />
            <v-btn class="sendBtn" @click="loginSend">login</v-btn>
        </v-container>        
    </v-card>
</template>
<script>
export default {
    data: () => ({
        show: false,
        login: {
            id: '',
            pw: '',
        },
        user: {
            id: 'admin1234',
            pw: 'Admin1234!'
        },
        img: require('@/assets/image/tigerback.png'),
        idrules: [
            value => !!value || '아이디를 입력해주세요.',
            value => (value && value.length >= 6) || '6자 이상 입력해주세요.'
        ],
        pwrules: {
          required: value => !!value || '비밀번호를 입력해주세요.',
          min: v => v.length >= 8 || '8자 이상 입력해주세요.',
        },
    }),
    created(){
        this.setHeader(-1)
    },
    methods: {
        loginSend(){
            if(this.login.id === this.user.id && this.login.pw === this.user.pw){
                this.$router.push('/main')
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.card_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    max-width: 400px;
    min-width: 300px;
    margin: 0 auto;
    .login_header{
        height: 60px;
        color: #fff;
        background: #e83d09;
        p{
            padding-left: 3%;
            text-transform: capitalize;
            line-height: 3.6;
            font-weight: bold;
        }
        img{
            float: right;
            width: 66px;
        }
    }
}

.inputBox{
    clear: both;
    padding: 4%;
    text-transform: uppercase;
    .sendBtn{
        width: 100%;
        margin-top: 10%;
        background: #e4552a;
        color: #fff;
    }
}
</style>