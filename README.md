# Api-TrueWallet-NodeJS-Module
Wallet coupon clipping with NodeJs and callbacks for easier separation.

How To Use

```js
const truemoney = require('./truemomey-code.js')
const tw = new truemoney('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
    console.log(data) // Callback ออกมาเป็น Json
  })
```
