const storage={
    key:{
       LOGIN:'Login'
    },
    s:window.localStorage,
    setObj:function (name,obj) {
        var str=JSON.stringify(obj);
        this.s.setItem(name,str);
    },
    getObj:function (name) {
        var str=this.s.getItem(name)
        return JSON.parse(str);
    }
}

//比较器，从大到小
const compare = function(prop) {
    return function(obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (val1 > val2) {
            return -1;
        } else if (val1 < val2) {
            return 1;
        } else {
            return 0;
        }
    }
};

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * 将jokes数组的对象的publishTime属性值（为时间戳字符串）转换为
 * xxxx-xx-xx xx:xx
 */
const jokesConvertTime = jokes => {
    if (!jokes) return;
    return jokes.map(function(e) {
        var date = new Date(e.publishTime);
        e.publishTime = formatTime(date);;
        return e;
    });
};


const guid= ()=> {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default {
    storage,
    guid,
    compare,
    jokesConvertTime
}