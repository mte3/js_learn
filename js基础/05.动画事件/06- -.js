function animate(obj, target, callBack) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
        // let s = Math.ceil((target - obj.offsetLeft) / 50)
        let s = (target - obj.offsetLeft) / 10
        //如果大于0则往大取整，少于0则往少取整
        s = s > 0 ? Math.ceil(s) : Math.floor(s)
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer)
            if (callBack){
                callBack()
            }
        }
        obj.style.left = obj.offsetLeft + s + 'px'
    }, 30)
}