/**
 * 默认样式+默认逻辑 common/js/base.js
 */
 import '@/common/js/base'
 import './about.scss'
//import '@/views/about/about.scss'

$('#btn2').longTap(()=>{
  __('.box2').addClass('myred');
})

document.getElementById('btn1').onclick=function(){
  alert('ddddd');
}
console.log('功能2')


