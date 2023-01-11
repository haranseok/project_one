<template>
    <table>
        <thead>
            <tr>
                <th v-for="(th, i) in list.th" :key="i">{{ th }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tr, i) in list.tr" :key="i">
                <td v-for="(td, j) in tr" :key="j">{{ td }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props: { 
        list:Object, 
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
table{
    width: 100%;
    table-layout: fixed;
    thead{
        width: 100%;
        display: table;
        table-layout: fixed;
        th{
            padding: 3% 0;
            text-transform: uppercase;
            background: lightcyan;
        }
    }
    tbody{
        display: block;
        max-height: 450px;
        overflow-y: scroll;
        background: lightcoral;
        tr{
            width: 100%;
            display: table;
            table-layout: fixed;
            td{
                padding: 3% 0;
                text-align: center;
            }
        }
    }    
}
</style>