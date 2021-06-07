var request = require('request');
const {EventEmitter} = require('events')
class truemoney extends EventEmitter {
constructor(a, phone) {
    super()
    this.code = a
    this.phones = phone
    this.urlimput()
  }
  urlimput() {
      var url = `${this.code}`
      this.codeurl = url.replace("https://gift.truemoney.com/campaign/?v=","")
      const urls = `https://gift.truemoney.com/campaign/vouchers/${this.codeurl}/redeem`;
      this.request(urls, data => {
        this.emit('json', data)
      })
  }
   request(urls) {
    var requestData = {
        "mobile":`${this.phones}`,
        "voucher_hash":`${this.codeurl}`
    }
    request({
      url: urls,
      method: 'POST',
      json: true,
      body: requestData
    }, (error, response, data) => {
      this.emit('message',data)
    }).setHeader('Content-Type', 'application/json');
  }
}
module.exports = truemoney
