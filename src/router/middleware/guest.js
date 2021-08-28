import * as Cookies from "js-cookie";
 /* eslint-disable */
export default function guest ({ next, store }){

    if(Cookies.get('token') ){
        return next({
            path: '/dashboard'
        });
    }

    return next()
}
