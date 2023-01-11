<template>
    <v-content>
        <h3>nft 정지</h3>
        <stopList 
        :list="stopList"
        />
        <div class="paging_container v-jcsb">
            <button @click="prevPage">prev</button>
            <ul class="page_list v-jcsa">
                <li v-for="(page, i) in pageList" :key="i"
                    :class="this.currentPage === i ? 'active':''"
                >
                    {{ page }}
                </li>
            </ul>
            <button @click="nextPage">next</button>
        </div>
    </v-content>
</template>
<script>
import { posts } from '@/api/index';
import stopList from '@/components/layout/TableLayout';

export default {
    // name: '',
    data(){
        return{
            stopList: {},
            pageList: 0,
            total: 0,
            totalPage: 0,
            currentPage: 0,
        }
    },
    components: {
        stopList
    },  
    async created() {
        let res = await posts();
        let listData = res.data.data;

        this.stopList.th = ["토큰 id","points"];
        this.stopList.tr = [];

        listData.forEach((e) => {
            let list = [];

            list.push(e["id"]);
            list.push(e["cardinal_points"]);

            this.stopList.tr.push(list)
        });
        this.total = this.stopList.tr.length;
        this.totalPage = this.total/20;
        this.pageList = Math.ceil((this.totalPage/5));
    },
    methods: {
        prevPage(){
            if(this.currentPage !== 0){
                this.currentPage = this.currentPage-1
                console.log(this.currentPage)
            }
        },
        nextPage(){
            if(this.currentPage !== this.totalPage){
                this.currentPage = this.currentPage +1
            }
        }
    },
}
</script>
<style lang="scss" scoped>

.paging_container{
    margin-top: 10px;
    padding: 0 10px;
    border: 1px solid #eee;
    button{
        font-size: 14px;
        text-transform: uppercase;
    }
}
.page_list{
    width: 150px;
    li{
        padding: 10px;
        border-radius: 5px;
    }
}
.active{
    background: lightblue;
}
</style>