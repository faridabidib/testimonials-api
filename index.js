const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3030;
app.use(express.json());
// your code
app.use(cors())
var XLSX = require("xlsx");
app.get('/',function(req,res){
    res.send(excel)
})
app.listen(PORT)
let workbook=XLSX.readFile('Testimonials.xlsx')
let worksheet=workbook.Sheets[workbook.SheetNames[0]]
let excel=XLSX.utils.sheet_to_json(worksheet)