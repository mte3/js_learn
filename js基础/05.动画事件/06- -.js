function animate(obj, target) {
    obj.timer = setInterval(() => {
        // let s = Math.ceil((target - obj.offsetLeft) / 50)
        let s = (target - obj.offsetLeft) / 50
        //如果大于0则往大取整，少于0则往少取整
        s = s > 0 ? Math.ceil(s) : Math.floor(s)
        if (obj.offsetLeft < target) {
            //匀速移动
            // obj.style.left = obj.offsetLeft + 1 + 'px'

            // 变速运动
            obj.style.left = obj.offsetLeft + s + 'px'
            // console.log(obj.style.left)
        } else {
            clearInterval(obj.timer)
            // obj.style.left = 0 + 'px'
        }
    }, 30)
}