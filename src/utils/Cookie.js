import Cookies from 'universal-cookie';

export const setCookies = (name,value) => {
    const cookies = new Cookies();
    const expirationTime = new Date();

    expirationTime.setTime(expirationTime.getTime() + 160 * 60 * 1000); // 160 minutes from now

    cookies.set(name,value, { path: '/',expires: expirationTime })
}
export const getCookie = (name) => {
    const cookies = new Cookies();
    return cookies.get(name);
}
export const removeCookie = (name) => {
    const cookies = new Cookies();
    cookies.remove(name,{ path: '/' });
}