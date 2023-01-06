<template>
  <v-app>
    <HomeView />
  </v-app>
</template>

<script>
import HomeView from '@/views/HomeView.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { HomeView }
}
</script>
<style lang="scss">
.v-application{
    overflow: hidden;
}

</style>
