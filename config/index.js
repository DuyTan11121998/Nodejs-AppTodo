var configValue =require("./config.json");
module.exports={
    getDbConnectionString: function(){
        return `mongodb+srv://${configValue.username}:${configValue.password}@cluster0-60uyf.mongodb.net/test?retryWrites=true&w=majority`;
    }
}