# Api-TrueWallet-NodeJS-Module
Wallet coupon clipping with NodeJs and callbacks for easier separation.

##ประกาศบุคคลที่ห้ามใช้งาน หรือ บุคคลที่อยู่ในเครือ ดังนี้
##↳ 144 , TK , JKC , 4826 , STCSurvival , จารพี และเครื่อที่ร่วมกันทำ , เฟียวคุง และเครื่อที่ร่วมกันท , Mew Nathida Phaetkul และเครื่อที่ร่วมกันท
##เนืองจากอยู่ในข่ายระงับการใช้งาน เพราะเหตุผลบางอย่าง

How To Use

```js
const truemoney = require('./truemomey-code.js')
const tw = new truemoney('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
    console.log(data) // Callback ออกมาเป็น Json
  })
```

```js
const truemoney = require('./truemomey-code.js')
const tw = new truemoney('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
      switch (data.status.code) {
            case "SUCCESS":
                  console.log('ไดรับเงินแล้วจำนวน'+data.data.voucher.amount_baht)
                  break;
            case "CANNOT_GET_OWN_VOUCHER":
                  console.log('รับซองตัวเองไม่ได้')
                  break;
            case "TARGET_USER_NOT_FOUND":
                  console.log('ไม่พบเบอร์นี้ในระบบ')
                  break;
            case "INTERNAL_ERROR":
                  console.log('ไม่ซองนี้ในระบบ หรือ URL ผิด')
                  break;
            case "VOUCHER_OUT_OF_STOCK":
                  console.log('มีคนรับไปแล้ว')
                  break;
            case "VOUCHER_NOT_FOUND":
                  console.log('ไม่พบซองในระบบ')
                  break;
            case "VOUCHER_EXPIRED":
                  console.log('ซองวอเลทนี้หมดอายุแล้ว')
                  break;
            default:
                break;
          }
  })
  
```
<img src="https://komarev.com/ghpvc/?username=TinnerKung&color=blueviolet" align="left">
