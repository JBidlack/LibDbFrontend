import CryptoJS from 'crypto-js';


const KEY = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_APP_SECRETKEY);


export const encryptData = (data) => {
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted =  CryptoJS.AES.encrypt(JSON.stringify(data), KEY, { iv: iv });
    const cipherText = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    return cipherText;
};
