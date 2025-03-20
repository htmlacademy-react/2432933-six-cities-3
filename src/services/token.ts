
const AUTH_TOKEN_KEY = 'six-cities-token';
const AUTH_TOKEN = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
const saveToken = (token: string) => localStorage.setItem(AUTH_TOKEN_KEY, token);

const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export {getToken, saveToken, dropToken, AUTH_TOKEN};
