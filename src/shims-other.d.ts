/*
 * @Author: Lanrri
 * @Date: 2019-09-16 17:43:02
 * @LastEditors: Lanrri
 * @LastEditTime: 2019-12-12 16:02:11
 */
declare module 'vue-wechat-title' {
  const VueWechatTitle: any
  export default VueWechatTitle
}
declare module 'qs' {
  const qs: any
  export default qs
}

declare module 'weixin-js-sdk' {
  const wx: any
  export default wx
}

declare module 'vue-qr' {
  const vueQr: any
  export default vueQr
}

declare module 'mta-h5-analysis' {
  const MtaH5: any
  export default MtaH5
}

declare module '*.json' {
  export const json: any
}

interface Window {
  isLoading: boolean
  createjs: any
  fabric: any
  wxShareConfig: any
}
