<template>
    <div class="container">
        <header>
            <Headers />
        </header>
        <v-main class="contents m0-auto max-w p4p">
            <v-content>
                <router-view />
            </v-content>
        </v-main>
        <v-footer>
            <Footers />
        </v-footer>
    </div>
</template>

<script>
import Headers from "@/components/header/MainHeader";
import Footers from "@/components/footer/MainFooter";

export default {
  name: 'HomeView',
  data(){
    return {
    }
  },
  computed: {
    },
  watch: {
    },
  components: {
    Headers,
    Footers
  },
};
</script>

<style lang="scss" scoped>

header{
    color: #fff;
    background: #ef4423;
}
footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: lavenderblush;
}
</style>