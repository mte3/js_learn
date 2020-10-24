//  13.监听窗口大小

const div = document.querySelector('.box')
//监听窗口变化
window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
})

//倒计时
// function countDown(time) {
//     const nowTime = +new Date();//当前时间总毫秒数
//     const inputTime = +new Date(time);//用户输入总毫秒数
//     const times = (inputTime - nowTime) / 1000;//剩余时间总毫秒数
//     let d = parseInt(times / 60 / 60 / 24);///天
//     d = d < 10 ? '0' + d : d;
//     let h = parseInt(times / 60 / 60 % 24);//时
//     h = h < 10 ? '0' + h : h;
//     let m = parseInt(times / 60 % 60);//分
//     m = m < 10 ? '0' + m : m;
//     let s =parseInt (times % 60);//秒
//     s = s < 10 ? '0' + s : s;
//     return d + '天' + h + '时' + m + '分' + s + '秒'
// }
// console.log(countDown('2020-10-24 12:00:00'))