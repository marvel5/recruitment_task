import { Bar } from 'vue-chartjs'

export default {
    name: 'ComponentB',
    extends: Bar,
    props: ['chartdata', 'options'],
    mounted () {
        this.render()
    },
    methods: {
        render () {
            this.renderChart(this.chartdata, this.options)
        }
    },
    watch: {
        chartdata () {
            this.render()
        }
    }
}