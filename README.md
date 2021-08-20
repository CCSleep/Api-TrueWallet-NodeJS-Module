# Api-TrueWallet-NodeJS-Module
Wallet coupon clipping with NodeJs and callbacks for easier separation.

อับเดต ลด loop 3 ช่วง + เบาเหี้ยๆเบาสัสๆ

How To Use

```js
const twApi = require('./truemomey-code.js')
const tw = new twApi('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
    console.log(data) // Callback ออกมาเป็น Json
  })
```

```js
const twApi = require('./truemomey-code.js')
const tw = new twApi('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
      switch (data.status.code) {
            case "SUCCESS":
                  console.log('ไดรับเงินแล้วจำนวน'+data.data.my_ticket.amount_baht)
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

```js
--------------------------------------------------------
> ทำเพือการศึกษา โดย TinnerKung
> แจกได้จำหน่ายพ่องตาย
> ของมันฟรีเสือกหาพ่อค้าดูด Script เอาไปโมให้เสียตัง
> ลูกค้าแม่งก็ควายชิปหาย
> TinnerKung
> Facebook https://www.facebook.com/sycertinnerkung or https://www.facebook.com/profile.php?id=100067487726495
> GitHub https://github.com/TinnerKung
> Website https://cszteam.me
--------------------------------------------------------
```
<img src="https://komarev.com/ghpvc/?username=TinnerKung&color=blueviolet" align="left">
