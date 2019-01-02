function babynote() {
  
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1A4lizVg9L1VCFf2wdVba-l4Uuj5ihatrRisPzE6Ugl4/edit#gid=1348060479');
  
  // シート名生成
  var m =Moment.moment()
  var date = m.format('YYYY年M月');

  //var date = Utilities.formatDate(new Date(), "JST", "yyyy年M月");
  //Logger.log(date); 
  var sheet = spreadsheet.getSheetByName(date);
  
  var temp_sheet = spreadsheet.getSheetByName("temp"); 
  //Logger.log(sheet);
  
  if(sheet){
   // Logger.log("ある"); 
  }else{
    var sheet_copy = temp_sheet.copyTo(spreadsheet);
    sheet_copy.setName(date);
    Logger.log(today)
   //Logger.log("ない"); 
  }
  
  
// [answersheet]のデータを配列で取る 
  var answersheet = spreadsheet.getSheetByName("answer")

  var lastrow = answersheet.getLastRow()
  var lastcol = answersheet.getLastColumn()
  var table = answersheet.getSheetValues(1, 1, lastrow,lastcol)
  
  var today = m.format('YYYY/MM/DD');

  var time = new Array();
  var doing= new Array();
  var bonyu = new Array();
  var pee = new Array();
  var milk = new Array();
  var poo = new Array();
  var free = new Array(); 
 


  for(var i = 1; i < lastrow; i++ ){
    var tmp = Moment.moment(table[i][0]).format('YYYY/MM/DD');
      if(today == tmp){
         time.push(table[i][1])
         doing.push(table[i][2])
         bonyu.push(table[i][3])
         pee.push(table[i][4])
         milk.push(table[i][5])
         poo.push(table[i][6])
         free.push(table[i][7])      
    }  
  }
  Logger.log(time)

//表にデータを入力する
  var lastrow1 = sheet.getLastRow()
  var lastcol2 = sheet.getLastColumn()
  var table1 = sheet.getSheetValues(1, 1, lastrow1,lastcol2)
  
  //Logger.log(table1)
  
  for(var l = 0; l < lastcol2; l++){
  　　　var tmp２ = Moment.moment(table[１][l]).format('YYYY/MM/DD');
　　　　　　　　　
  }

}
