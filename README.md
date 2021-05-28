# Api-TrueWallet-NodeJS-Module
ใช้งานตัดคูปองวอเลทด้วย NodeJs และ มี Callback เพื่อการเขียนการแยกที่ง่ายขึ้น

วิธีการใช้งาน

const truemoney = require('./truemomey-code.js')
const tw = new truemoney('https://gift.truemoney.com/campaign/?v=[ โค๊ตคูปอง ]', '[เบอร์โทร]')

tw.on('message', data => {
    console.log(data) // Callback ออกมาเป็น Json
  })
