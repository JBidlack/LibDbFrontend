import CryptoJS from 'crypto-js';


const KEY = import.meta.env.VITE_APP_SECRETKEY;


export const encryptData = (data) => {
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted =  CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(KEY), {iv:iv});
    const cipherText = iv.concat(encrypted.cipherText).toString(CryptoJS.enc.Base64);
    return cipherText;
};
