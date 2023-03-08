<template>
  <div class="box">
    <div>
      <div id="pdf"></div>
    </div>
  </div>
</template>

<script>
import Pdfh5 from 'pdfh5'
import 'pdfh5/css/pdfh5.css'
export default {
  data() {
    return {
      pdfh5: null,
      src:'https://arkokoley.github.io/pdfvuer/nationStates.pdf'
    }
  },

  mounted() {
    this.pdfing()
  },
  methods: {
    pdfing() {
      const _this = this
      this.pdfh5 = new Pdfh5('#pdf', {
        cMapUrl: '/pdfjs-2.4.456-es5-dist/web/cmaps/',
        pdfurl: _this.src,
      }).on('complete', (status, msg, time) => {
        // 监听完成事件
        console.log('状态：' + status + '，信息：' + msg + '，耗时：' + time + '毫秒')
      })
    }
  },
}
</script>
