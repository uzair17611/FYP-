// default app configuration
const port = process.env.PORT || 3000;
let db =  "mongodb://127.0.0.1:27017/fyp";

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};

