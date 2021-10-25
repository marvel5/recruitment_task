import ComponentB from '@/components/ComponentB/ComponentB.vue'
import moment from 'moment'
export default {
    name: 'ComponentA',
    data: () => ({
        info: null,
        loading: true,
        errored: false,
        polling: null,
        countDownTimer: null,
        now: Date.now()
    }),
    components: {
        ComponentB
    },
    mounted() {
        this.init(),
        this.countDownTimer = setInterval(() =>  {
            this.now = Date.now()
       }, 1000)
    },
    computed: {
        chartValuesA () {
            return this.info.Errors.map(i => i.Value)
        },
        chartDataA () {
            return {
                labels: this.chartValuesA,
                datasets: [
                    {
                        data: this.chartValuesA,
                        backgroundColor: '#e23333',
                        borderWidth:1
                    }
                ]
            }
        },
        chartValuesB () {
            return this.info.Warnings.map(i => i.Value)
        },
        chartDataB () {
            return {
                labels: this.chartValuesB,
                datasets: [
                    {
                        data: this.chartValuesB,
                        backgroundColor: '#cb9b47',
                        borderWidth:1
                    }
                ]
            }
        },
        chartValuesC () {
            return this.info.Operations.map(i => i.Value)
        },
        chartDataC () {
            return {
                labels: this.chartValuesC,
                datasets: [
                    {
                        data: this.chartValuesC,
                        backgroundColor: '#2699fb',
                        borderWidth:1
                    }
                ]
            }
        },
        ago () {
            var countDownDate = moment(this.info.LastSync).local().toDate();
            var now = this.now;
            var timeleft = countDownDate - now;
            console.log(countDownDate)
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            return minutes + 'min' + seconds + "sec"
        }
    },
    methods: {
        init() {
            // first get data
            this.getData()
            // get data every 20s 
            this.pollData()
        },
        async getData() {
            await this.axios.get('https://visualsoft.com.pl/rekrutacja/202009/dane')
                .then(response => (this.info = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        pollData() {
            this.polling = setInterval(() => {
                this.getData()
            }, 20000)
        },
        generateOptions (fontColorTicks) {
            return {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: fontColorTicks,
                            padding:0,
                            fontSize: 7,
                            lineHeight: 1
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.countDownTimer)
        clearInterval(this.polling)
    }
}