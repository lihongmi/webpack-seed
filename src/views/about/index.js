/**
 * 默认样式+默认逻辑 common/js/base.js
 */
 import '@/common/js/base'
 import './about.scss'
//import '@/views/about/about.scss'

import { sendcode,checkloginname } from '@/api/user'

$('#btn2').longTap(()=>{
  __('.box2').addClass('myred');
})

document.getElementById('btn1').onclick=function(){
  alert('ddddd');
}
console.log('功能2')


$('#btn3').click(function(){

  /*$.ajax({
    type:'POST',
    url:'http://api.6fu.co/api/A01SendCode',

    data:{
      phone:'15720188969'
    },
    dataType: 'json',
    timeout: 300,
    success:function(result){
      console.log(result);

    },
    error: function(xhr, type){
      console.log(xhr,type)
    }
  })*/

  checkloginname({login_name:'xiaomimi',reg_type:0}).then(res=>{
    console.log('res',res);
  });

  sendcode({phone:'15720188969'}).then(res => {
    console.log('res',res);

  })
  .catch(error => {
    console.log('请求失败,请检查网络, 重新发起请求',error)
  })


  let res={
    "code": 0,
    "data": {
      "panId": 2,
      "panUrl": "http://www.baidu.com",
      "panName": "owuxa01",
      "panPwd": "aka12254",
      "forumUrl": "http://bbs.baidu.com",
      "forumCode": "124511",
      "isUse": true
    }
  };

  $('.box2').html(res.data.panUrl);
//  console.log();



});
