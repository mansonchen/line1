var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1574134355',
  channelSecret: 'cbd4ec03cd3db2e6d657cdc62374e72e',
  channelAccessToken: 'V3XFF6OhjninjUQF/7KKg48+1Il6MSCyioKD2wvesEVApd14hHCTgK0vwXs47pX3fDTShHYgEpLrxrwKtJv9UD7+xkgGzyWwKaVcPbkkioRGSoXovy5s/IXn1noTgudZdvmea2seQ1uO+8Y0eXW+vAdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
  //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(msg).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(msg);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});