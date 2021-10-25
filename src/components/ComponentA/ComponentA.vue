<template>
    <section class="component-a-container" v-if="!loading">
        <header class="flex justify-between items-end component-a-container__header mb-1">
            <div class="header">
                <h1 class="header__h1">
                    {{info.Name}}
                </h1>
                <h6 class="header__h6">{{info.Url}}</h6>
            </div>
            <div class="info-box text-center" :class="{'orange': info.AvgResponseTime > info.AvgResponseTimeWarningLimit, 'red': info.AvgResponseTime > info.AvgResponseTimeAlertLimit}">
                <h3 class="info-box__h3">{{info.AvgResponseTime}}ms</h3>
                <span class="info-box__span">Average response time</span>
            </div>
        </header>
        <article>
            <div class="flex justify-between items-end mb-3">
                <div class="flex chart-container">
                    <component-b 
                        :chartdata="chartDataA" 
                        :options="generateOptions('#e23333')"
                        key="A">
                    </component-b>
                </div>
                <div class="info-box text-center red">
                    <h3 class="info-box__h3">{{info.AvgResponseTime}}</h3>
                    <h5 class="info-box__h5">(5)</h5>
                    <span class="info-box__span">Errors in last hour</span>
                </div>
            </div>
            <div class="flex justify-between items-end mb-3">
                <div class="flex chart-container">
                    <component-b 
                        :chartdata="chartDataB" 
                        :options="generateOptions('#cb9b47')"
                        key="B">
                    </component-b>
                </div>
                <div class="info-box text-center orange">
                    <h3 class="info-box__h3">{{info.AvgResponseTime}}</h3>
                    <h5 class="info-box__h5">(5)</h5>
                    <span class="info-box__span">Warnings in last hour</span>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex chart-container">
                    <component-b 
                        :chartdata="chartDataC" 
                        :options="generateOptions('#2699fb')"
                        key="C">
                    </component-b>
                </div>
                <div class="info-box text-center blue">
                    <h3 class="info-box__h3">{{info.AvgResponseTime}}</h3>
                    <span class="info-box__span">Operations in last hour</span>
                </div>
            </div>
        </article>
        <footer class="flex justify-between component-a-container__footer">
            <div>
                Last error: {{info.LastErrorStr}}
            </div>
            <div>
                Since last sync: {{ago}}
            </div>
            <div>
                Daily error count: {{info.DailyErrorCount}}
            </div>
        </footer>
    </section>
</template>
<script src="./ComponentA.js"></script>
<style lang="scss" src="./ComponentA.scss"></style>