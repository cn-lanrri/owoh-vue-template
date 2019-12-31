/*
 * @Author: Lanrri
 * @Date: 2019-12-31 15:20:02
 * @Description:
 * @LastEditors  : Lanrri
 * @LastEditTime : 2019-12-31 17:21:08
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
