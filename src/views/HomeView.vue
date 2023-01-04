<template>
    <div class="container">
        <header v-if="none !== 'none'">
            <component :is="getHeader" />
        </header>
        <v-main class="contents">
            <v-content class="mx-auto">
                <router-view />
            </v-content>
        </v-main>
        <v-footer app v-if="footerNone !== 'none'">
            <component :is="getFooter" />
        </v-footer>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Headers from "@/components/header/router";
import Footers from "@/components/footer/router";
export default {
  name: 'HomeView',
  data(){
    return {
        headerKey: -1,
        footerKey: -1,
    }
  },
  computed: {
        getConfigHeaderType() {
            return this.$store.getters.getHeaderType;
        },
        getConfigFooterType() {
            return this.$store.getters.getFooterType;
        },
        getHeader() {
            if (this.headerKey !== -1) {
                return defineAsyncComponent(Headers[this.headerKey].component);
            }
            return "";
        },
        getFooter() {
            if(this.footerKey !== -1) {
                return defineAsyncComponent(Footers[this.footerKey].component);
            }
            return "";
        }
    },
    watch: {
        getConfigHeaderType(val) {
            this.headerKey = val;
        },
        getConfigFooterType(val) {
            this.footerKey = val;
        }
    },
  components: {
  },
};
</script>

<style lang="scss" scoped>
header{
    // height: 60px;
    color: #fff;
    background: #ef4423;
}
.contents{
    background: lemonchiffon;
    height: 1000px;
}
footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: lavenderblush;
}
</style>