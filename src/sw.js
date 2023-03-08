import ClientMonitor from 'skywalking-client-js'
// import Vue from 'vue'


export default function runSwClient() {
  ClientMonitor.register({
    service: 'h5',
    pagePath: location.href,
    serviceVersion: 'v1.0.0',
    // // 错误追踪
    // jsErrors: true,
    // apiErrors: true,
    // resourceErrors: true,
    // vue: Vue,
    // // 性能追踪
    // autoTracePerf: true,
    // useFmp: true,
    // enableSPA: true,
    // // 网络追踪
    // traceSDKInternal: false,
    // detailMode: true,
    // noTraceOrigins: [],
    // traceTimeInterval: 10000,
  })
}