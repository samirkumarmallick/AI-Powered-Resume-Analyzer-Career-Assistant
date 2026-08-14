const mongoose = require("mongoose")
const dns = require('dns')

// Set fallback DNS servers for Node's resolver (helps when system VPN/warp blocks SRV)
dns.setServers(["8.8.8.8", "1.1.1.1"])

async function connectToDB(){
    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
    }
    catch(err){
        console.error(err)
    }

}

module.exports = connectToDB