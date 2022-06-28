import Cookie from 'js-cookie';
const SetCookie=(cookiename,usrin)=>{

    Cookie.set(cookiename,usrin,{
        expires:1, //1day
        secure:true, //secure
        sameSite:'strict',
        path:'/'
    })
};

export default SetCookie;