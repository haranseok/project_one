<template>
    <div class="chart_box">
        <h2>막대형 차트</h2>
        <Bar
        :options="chartOptions"
        :data="chartData"
    />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    components: { Bar },
    // props: {
    //     chartData: {
    //         type: Object,
    //         required: true
    //     },
    //     chartOptions: {
    //         type: Object,
    //         default: () => {}
    //     }
    // }
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ { 
                    label:'month',
                    data: [40, 20, 12],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ]} ]            
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
// https://vue-chartjs.org/guide/#chart-with-local-data vue data
</script>

<style lang="scss" scoped>
.chart_box{
    width: 500px;
}
</style>