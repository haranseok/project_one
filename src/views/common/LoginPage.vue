<template>
    <v-card class="card_box">
        <div class="login_header">
            <p>metakingz admin</p>
            <img :src="img" alt="">
        </div>
        <v-container class="inputBox">
            <v-text-field
                label="id"
                color="deep-orange"
                :rules="idrules"
                hide-datails="auto" />
            <v-text-field
                label="password"
                color="deep-orange"
                :rules="pwrules"
                hide-details="auto" />
            <v-btn class="sendBtn">login</v-btn>
        </v-container>        
    </v-card>
</template>
<script>
export default {
    data: () => ({
        img: require('@/assets/image/tigerback.png'),
        idrules: [
            value => !!value || '아이디를 입력해주세요.',
            value => (value && value.length >= 3) || '3자 이상 입력해주세요.'
        ],
        pwrules: [
            value => !!value || '비밀번호를 입력해주세요.',
            value => (value && value.length >= 6) || '6자 이상 입렵해주세요.'
        ]
    })
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
        display: flex;
        justify-content: space-between;
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

@media screen and (max-width: 480px) {
    
}
</style>