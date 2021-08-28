import * as Cookies from "js-cookie";
 /* eslint-disable */
export default function auth ({ next, store }){
    // console.log('auth state')
    if(!Cookies.get('token')){
        return next({
            path: '/login'
        });
    }

    return next();

    
}