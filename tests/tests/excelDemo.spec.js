const ExcelJs=require('exceljs');
const {test,expect}=require('@playwright/test');
async function writeExcelTest(searchTerm,replaceTerm,change,fileName,dataPage){
    
    const Workbook=new ExcelJs.Workbook();
    await Workbook.xlsx.readFile(fileName);
    const Worksheet=Workbook.getWorksheet(dataPage);
    const outputt=await readExcelText(Worksheet,searchTerm);
    const cell=Worksheet.getCell(outputt.row,outputt.column+change.colno);
    cell.value=replaceTerm;
    await Workbook.xlsx.writeFile(fileName);
}
async function readExcelText(Worksheet,searchTerm){
    let output={row:-1,column:-1};
    Worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>{
        if(cell.value==searchTerm){
            output.row=rowNumber;
            output.column=colNumber;
        }
    })
})
return output;
}
//writeExcelTest("Mango",350,{rowno:0,colno:2},"/Users/suraj/Downloads/exceldownloadtest.xlsx","Sheet1");
test('@Web Table test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise=page.waitForEvent('download');
    await page.getByRole('button',{name:'Download'}).click();
    const downlooad=await downloadPromise;
    const fileePath="/Users/suraj/Downloads/download.xlsx";
    await downlooad.saveAs(fileePath);
    await writeExcelTest("Mango",350,{rowno:0,colno:2},fileePath,"Sheet1");
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles(fileePath);
});
