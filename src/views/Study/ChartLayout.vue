<template>
    <BarChart />
    <Doughnut />
    <canvas>d</canvas>
</template>

<script>
import BarChart from '@/components/chart/BarChart.vue';
import Doughnut from '@/components/chart/DoughnutChart.vue';
export default {
    components: { BarChart, Doughnut }
}
</script>

<style>

</style>