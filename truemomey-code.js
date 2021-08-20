let EventEmitter = require('events');
class twApi extends EventEmitter {
    constructor(UrlTrueWallet, PhoneNumber) {
        super();
        let UrlTrueWalletFull = 'https://gift.truemoney.com/campaign/';
        let UrlTrueWalletReplace = UrlTrueWallet.replace(UrlTrueWalletFull + '?v=', "");
        require('request').post({
            url: UrlTrueWalletFull + 'vouchers/' + UrlTrueWalletReplace + '/redeem',
            json: true,
            body: ({
                "mobile": PhoneNumber
            })
        }, (error, response, data) => {
            this.emit('msg', data)
        })
    }
}
module.exports = twApi
