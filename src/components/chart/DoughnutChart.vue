<template>
    <div class="chart_box">
        <h2>도넛 차트</h2>
        <Doughnut
        :options="chartOptions"
        :data="chartData"
        />
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
    name: 'DoughnutChart',
    components: {
        Doughnut
    },
  data() {
    return {
      chartData: {
        labels: ['코코넛박스 연간 관람권', '코코넛박스 홀더 전용 라운지', '코코넛박스 F&B 20% 할인', '코코발리 BBQ 10% 할인','발리문 음료 서비스','팜팜발리 메뉴 서비스','퍼플스테이 숙박권 50% 할인권','온·오프라인 굿즈 20% 할인'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','orange','blue','yellow','black'],
            data: [5, 1, 1, 2, 3, 4, 2, 1]
          }
        ]
      },
      chartOptions: {
        responsive: true,
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.chart_box{
    width: 400px;
}

</style>