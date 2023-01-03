<template>
    <div class="container">
        <div class="h_container" v-if="none !== 'none'">
            <component :is="getHeader" />
        </div>
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
        <div class="f_container" v-if="footerNone !== 'none'">
            <component :is="getFooter" />
        </div>
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

// @media screen and (max-width:1920px) {
//     .container{
//         max-width: 1200px;
//         margin: 0 auto;
//     }
// }
</style>