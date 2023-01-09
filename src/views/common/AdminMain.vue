<template>
    <div class="QR_box absolute mx-auto max-w">
        <v-card class="card cp"> 
            <v-icon class="icon_holder">mdi-clipboard-account</v-icon>
            <span>홀더 qr</span>
        </v-card>
        <v-card class="card cp">
            <img :src="icon.coupon" alt="쿠폰" class="coupon">
            <span>쿠폰 qr</span>
        </v-card>
        <v-card class="card cp">
            <img :src="icon.gift" alt="이벤트">
            <span>행사 qr</span>
        </v-card>
        <v-card class="card cp">
            <img :src="icon.nft" alt="nft아이콘">
            <span>nft 전송</span>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            icon: {
                coupon: require('@/assets/image/icon/icon_coupon.png'),
                nft: require('@/assets/image/icon/icon_nft.png'),
                gift: require('@/assets/image/icon/icon_gift.png'),
            }
        }
    },
    created() {
        this.setHeader(0);
        this.setFooter(0);
    }
}
</script>

<style lang="scss" scoped>
.absolute{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.QR_box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10% 5%;
    box-sizing: border-box;
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        min-height: 200px;
        padding: 3%;
        margin: 2.5%;
        .icon_holder{
            margin: 10% 0;
            font-size: 60px;
        }
        img{
            width: 60px;
            margin: 10% 0;
        }
        .coupon{
            width: 80px;
            margin: 15% 0;
        }
        span{
            padding: 10% 0;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
}

@media all and (max-width: 480px) {
    .QR_box{
        .card{
            min-height: 100px;
            .coupon{
                margin: 20% 0;
            }
        }
    }
}
</style>