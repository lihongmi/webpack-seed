/**
 * 默认样式+默认逻辑 common/js/base.js
 */
 import '@/common/js/base'
 import './about.scss'
//import '@/views/about/about.scss'

// 测试用的工具函数
import __ from 'utils/dom'
import { movieList } from '@/api/movie'

class About {
  init() {
    //实现点击
    this.testToolFun()
    //tab 切换
    this.testFetchData()

  }

  testToolFun() {
      document.getElementById('btn1').onclick=function(){
        alert('ddddd');
      }
  }

  testFetchData() {
    console.log('功能2')
  }



}

new About().init()
