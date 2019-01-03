/*

Copyright 2019 Raul de Melo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/*********

GOAL:
Merge and fix

STRATEGY:
Automatic-detection and manual-fixes.

USAGES:
node merge.js EN
node merge.js PT

DONE:
Added columns: Group column, Alcohol column.
Translated fields: class Translate.*
Output data: class Output.*
Input/Output files: class TacoFile.*

FIELD'S LEGEND:
  * header row
    * header fields
      * (all)
  * group row
    * group fields
      * (first one)
  * data row
    * data fields 
      * common fields
        * id field
        * description field
        * group field
      * sum fields
        * (rest, except repeated id)

**********/

fs=require("fs")

String.prototype.singleSpace=function(){
 return this.replace(/[ ][ ]+/g, " ")
}

const Output={
 data: {},
 headers: {},
 groups: new Set(),
 translated: {},
}

class Rows extends Array{
 setFile(file, table) {
  this.length=0
  this.push(...
   fs
   .readFileSync(file, "utf8")
   .split("\r\n")
   .map(line=>line.split("\t"))
  )
  this.headersIndexes=[0,1,2]
  this.headers=this.getMergedHeaders()
  this.table=table
 }
 getMergedHeaders(){
  const headers=[]
  for(const fieldIndex of this[0].keys()){ // no constant-length test: its table
   headers.push("")
   for(const rowIndex of this.headersIndexes)
    headers[fieldIndex]+=" "+this[rowIndex][fieldIndex]
  }
  return headers
 }
 addToOutput(){
  if(this.table==="Centesimal, minerais, vitaminas e colesterol")
   this.headers.splice(10, 0, "Teor Alcoólico (g)") // insert after Fiber
  this.headers.splice(2,0,"Grupo do Alimento") // insert after Description
  let currentGroup=''
  for(const rowIndex of this.keys()){
   const row=new Row()
   row.setRows(this, rowIndex)
   if(row.isData()){
    if(this.table==="Centesimal, minerais, vitaminas e colesterol"){
     const alcohol=row.id==="472"?"31.11": // XLSfootnote: Cana, aguardente
                   row.id==="474"?"3.60":  // XLSfootnote: Cerveja, pilsen
                   "NA"                    // XLSfootnote: não-aplicável
     row.splice(10, 0, alcohol) // insert after Fiber
    }
    row.splice(2,0,currentGroup) // insert after Description
    row.addToOutput()
   }else if(row.isHeader())
    ; // ignore repeated headers
   else
    currentGroup=row.id
  }
 }
} // ENDOF: class Rows

class Translate{
 static translateFieldByMap(str, map){
  if(map.hasOwnProperty(str) && map[str]!==str){
   Translate.translatedFieldsByMap.set(str, map[str])
   str=map[str]
  }
  return str
 }
 static translateFieldByMapQuietly(str, map){
  if(map.hasOwnProperty(str) && map[str]!==str)
   str=map[str]
  return str
 }
 static translateFieldQuietly(str){
  return str
  .trim()
  .singleSpace()
 }
}
Translate.translateToEnglish=true
Translate.translatedFieldsByMap=new Map() // log
Translate.headerField={
 "Carbo- idrato (g)": "Carboidrato (g)",
 "Sa- turados (g)": "Saturados (g)",
 "Mono- insaturados (g)": "Monoinsaturados (g)",
 "Poli- insaturados (g)": "Poliinsaturados (g)",
 // pattern: "Energia (kcal)"
 "(kJ)": "Energia (kJ)",
 // pattern: "Número do Alimento", "Grupo do Alimento"
 "Descrição dos alimentos": "Descrição do Alimento",
}
Translate.headerFieldToEnglish={
 "Número do Alimento": "id",
 "Descrição do Alimento": "description",
 "Grupo do Alimento": "category",
 "Umidade (%)": "humidity_percents",
 "Energia (kcal)": "energy_kcal",
 "Energia (kJ)": "energy_kj",
 "Proteína (g)": "protein_g",
 "Lipídeos (g)": "lipid_g",
 "Colesterol (mg)": "cholesterol_mg",
 "Carboidrato (g)": "carbohydrate_g",
 "Fibra Alimentar (g)": "fiber_g",
 "Teor Alcoólico (g)": "alcohol_g",
 "Cinzas (g)": "ashes_g",
 "Cálcio (mg)": "calcium_mg",
 "Magnésio (mg)": "magnesium_mg",
 "Manganês (mg)": "manganese_mg",
 "Fósforo (mg)": "phosphorus_mg",
 "Ferro (mg)": "iron_mg",
 "Sódio (mg)": "sodium_mg",
 "Potássio (mg)": "potassium_mg",
 "Cobre (mg)": "copper_mg",
 "Zinco (mg)": "zinc_mg",
 "Retinol (mcg)": "retinol_mcg",
 "RE (mcg)": "re_mcg",
 "RAE (mcg)": "rae_mcg",
 "Tiamina (mg)": "thiamine_mg",
 "Riboflavina (mg)": "riboflavin_mg",
 "Piridoxina (mg)": "pyridoxine_mg",
 "Niacina (mg)": "niacin_mg",
 "Vitamina C (mg)": "vitaminC_mg",
 "Saturados (g)": "saturated_g",
 "Monoinsaturados (g)": "monounsaturated_g",
 "Poliinsaturados (g)": "polyunsaturated_g",
 "12:0 (g)": "12:0_g",
 "14:0 (g)": "14:0_g",
 "16:0 (g)": "16:0_g",
 "18:0 (g)": "18:0_g",
 "20:0 (g)": "20:0_g",
 "22:0 (g)": "22:0_g",
 "24:0 (g)": "24:0_g",
 "14:1 (g)": "14:1_g",
 "16:1 (g)": "16:1_g",
 "18:1 (g)": "18:1_g",
 "20:1 (g)": "20:1_g",
 "18:2 n-6 (g)": "18:2 n-6_g",
 "18:3 n-3 (g)": "18:3 n-3_g",
 "20:4 (g)": "20:4_g",
 "20:5 (g)": "20:5_g",
 "22:5 (g)": "22:5_g",
 "22:6 (g)": "22:6_g",
 "18:1t (g)": "18:1t_g",
 "18:2t (g)": "18:2t_g",
 "Triptofano (g)": "tryptophan_g",
 "Treonina (g)": "threonine_g",
 "Isoleucina (g)": "isoleucine_g",
 "Leucina (g)": "leucine_g",
 "Lisina (g)": "lysine_g",
 "Metionina (g)": "methionine_g",
 "Cistina (g)": "cystine_g",
 "Fenilalanina (g)": "phenylalanine_g",
 "Tirosina (g)": "tyrosine_g",
 "Valina (g)": "valine_g",
 "Arginina (g)": "arginine_g",
 "Histidina (g)": "histidine_g",
 "Alanina (g)": "alanine_g",
 "Ácido Aspártico (g)": "aspartic_g",
 "Ácido Glutâmico (g)": "glutamic_g",
 "Glicina (g)": "glycine_g",
 "Prolina (g)": "proline_g",
 "Serina (g)": "serine_g",
},
Translate.groupFieldToEnglish={
 "Cereais e derivados": "Cereais e derivados",
 "Verduras, hortaliças e derivados": "Verduras, hortaliças e derivados",
 "Frutas e derivados": "Frutas e derivados",
 "Gorduras e óleos": "Gorduras e óleos",
 "Pescados e frutos do mar": "Pescados e frutos do mar",
 "Carnes e derivados": "Carnes e derivados",
 "Leite e derivados": "Leite e derivados",
 "Bebidas (alcoólicas e não alcoólicas)": "Bebidas (alcoólicas e não alcoólicas)",
 "Ovos e derivados": "Ovos e derivados",
 "Produtos açucarados": "Produtos açucarados",
 "Miscelâneas": "Miscelâneas",
 "Outros alimentos industrializados": "Outros alimentos industrializados",
 "Alimentos preparados": "Alimentos preparados",
 "Leguminosas e derivados": "Leguminosas e derivados",
 "Nozes e sementes": "Nozes e sementes",
},
Translate.tableToEnglish={
 "Centesimal, minerais, vitaminas e colesterol": "centesimal, minerals, vitamins and cholesterol",
 "Ácidos graxos": "fatty acids",
 "Aminoácidos": "amino acids",
 "Alimento": "food",
},
Translate.dataFields=
[
 {
  // 
 },
 {
  // some are needed to merge (id#description)
  "Maria mole": "¿Maria mole? ou ¿Queijo, requeijão, cremoso?",
  "Queijo, requeijão, cremoso": "¿Maria mole? ou ¿Queijo, requeijão, cremoso?",
  "Palmito, juçara, em conserva": "Palmito, Juçara, em conserva",
  "Lambari, fresco,cru": "Lambari, fresco, cru",
  "Abadejo, filé, congelado,cozido": "Abadejo, filé, congelado, cozido",
 },
 {
  // some are needed to merge (id#group)
  "Frutos e derivados": "Frutas e derivados",
 },
]
Translate.numberField=
{
 ",0,02": "0.02",
}

class Row extends Array{
 setRows(rows, rowIndex){
  this.length=0
  this.push(... rows[rowIndex])
  this.rows=rows
  this.id=this[0]
  this.FIELD_ID=0
  this.FIELD_DESCRIPTION=1
  this.FIELD_GROUP=2
 }
 isHeader(){
  for(const rowIndex of this.rows.headersIndexes)
   if(this.id===this.rows[rowIndex][0])
    return true
  return false
 }
 isData(){
  return this.id.search(/^\d+$/)!==-1
 }
 isSumField(fieldIndex){
  return fieldIndex>this.FIELD_GROUP &&
   this.rows.headers[fieldIndex]!==this.rows.headers[this.FIELD_ID] // repeated id
 }
 addToOutput(){
  // ----- Output.data
  if(! Output.data.hasOwnProperty(this.id) )
   Output.data[this.id]={}
  const dataRow=Output.data[this.id]
  // ----- for
  for(const fieldIndex of this.keys()){
   let table=this.rows.table
   let header=Translate.translateFieldQuietly(this.rows.headers[fieldIndex])
   header=Translate.translateFieldByMap(header, Translate.headerField)
   let field=Translate.translateFieldQuietly(this[fieldIndex])
   if(fieldIndex<Translate.dataFields.length)
    field=Translate.translateFieldByMap(field, Translate.dataFields[fieldIndex])
   if(this.isSumField(fieldIndex)){
    field=Translate.translateFieldByMap(field, Translate.numberField)
    if(field.search("^(|[*]|Tr|NA)$")!==-1)
     ;
    else if(field.search("^-?[0-9]*[.]?[0-9]+$")!==-1)
     field=field*1 // in the end: to number (not string)
    else
     throw `Number formatted? [${header}](${field})`
   }else{
    table="Alimento" // differs from sumField
    if(field.search("^ | $|^,|,$| ,|,[^0-9 ]")!==-1)
     throw `Space formatted? [${header}](${field})`
   }
   if(field==='') // empty fields are not recorded nor compared
    continue
   // ----- English
   if(Translate.translateToEnglish){
    header=Translate.translateFieldByMapQuietly(header, Translate.headerFieldToEnglish)
    if(fieldIndex===this.FIELD_GROUP && field!=='')
     field=Translate.translateFieldByMapQuietly(field, Translate.groupFieldToEnglish)
    table=Translate.translateFieldByMapQuietly(table, Translate.tableToEnglish)
   }
   //  ----- Output.headers
   if(fieldIndex===this.FIELD_GROUP && field!==''){
    if(!Output.headers.hasOwnProperty(header))
     Output.headers[header]=new Set()
    Output.headers[header].add(field)
   }
   if(!Output.headers.hasOwnProperty(table))
    Output.headers[table]=new Set()
   Output.headers[table].add(header)
   // ----- Output.data
   if(! dataRow.hasOwnProperty(header) )
    dataRow[header]=field
   else{
    const dataField=dataRow[header]
    if(dataField!==field)
     throw `Merge equality? [${header}](${dataField}) [${header}](${field})`
   }
  }
 }
} // ENDOF: class Row

class TacoFile{
 static tsvToOutput(){
  const tables=[
   ["TACO2011autoCMVC.tsv", "Centesimal, minerais, vitaminas e colesterol"],
   ["TACO2011autoAG.tsv", "Ácidos graxos"],
   ["TACO2011autoAA.tsv", "Aminoácidos"],
  ]
  for(const [file, table] of tables){
   const rows=new Rows()
   rows.setFile(file, table)
   rows.addToOutput()
  }
 }
 static outputToJson(){
  for(const outputKey of ["data","headers"]){
   const language=Translate.translateToEnglish?"EN":"PT"
   const outputFile=`TACO${outputKey}${language}.json`
   let output=Output[outputKey]
   for(let k in output)
    if(output[k] instanceof Set)
     output[k]=[...output[k]]
   fs.writeFileSync(outputFile, JSON.stringify(output, null, 1))
   output=JSON.parse(fs.readFileSync(outputFile, "utf8"))
   console.log(output)
   // ----- benchmark
   console.time(`Loading file ${outputFile}`)
   output=JSON.parse(fs.readFileSync(outputFile, "utf8"))
   console.timeEnd(`Loading file ${outputFile}`)
  }
 }
}

(function main(){
 if(process.argv.length!==3 || process.argv[2].search("^(EN|PT)$")===-1){
  console.error('USAGES:')
  console.error('node merge.js EN')
  console.error('node merge.js PT')
  process.exit(1)
 }
 Translate.translateToEnglish=process.argv[2]==="EN"
 TacoFile.tsvToOutput()
 TacoFile.outputToJson()
 console.log(Translate.translatedFieldsByMap)
 console.log("Translated quietly: Trim and SingleSpace")
})()
