const key={
    token:'token'
};

const myLocalStorage={
    set:(key,value)=>{
        localStorage.setItem(key,JSON.stringify(value));
    },
    get:(key)=>{
        localStorage.getItem(key);
    },
    del:(key)=>{
        localStorage.removeItem(key);
    }
};

const myCookie={
    set:(key,value,expiresDays)=>{
        let d=new Date();
        d.setTime(d.getTime()+expiresDays*24*60*60*1000);
        let expires=d.toUTCString();
        document.cookie=key+'='+value+';'+'expires='+expires;
    },
    get:(key)=>{
        let name=key+'=';
        let cookies=document.cookie.split(';');
        for(let i=0;i<cookies.length;i++){
            let temp=cookies[i].trim();
            if(temp.indexOf(name)===0)
                return temp.substring(name.length,temp.length);
        }
        return "";
    },
    del:(key)=>{
        document.cookie = key+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
};

/*
存取token
 */

const setToken=(value)=>{
    myCookie.set(key.token,value,3);
};

const getToken=()=>{
    return myCookie.get(key.token);
};

export default {
    setToken,
    getToken,
};
