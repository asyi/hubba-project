// require the csvtojson converter class, cheerio and pretty (and fs)
const Converter = require('csvtojson').Converter;
// const fs = require('fs');
const cheerio = require('cheerio');
const pretty = require('pretty');

//create a new converter object
const converter = new Converter({});

//call the fromFile function which takes in the path to the csv file, as well as a callback function
converter.fromFile("./Product Information.csv", (err, result) => {
  // if an error has occurred, then handle it
  if(err){
    console.log("An error has occurred");
    console.log(err);
  }
  // create a variable called json and store the result of the conversion, which is an array of objects
  const json = result;

  // creates a new object with product numbers as the keys and the values as the product objects, removing product numbers as values of said objects
  function arrayToObject(json){
    const product = {};

    json.map(
      (element) => {
        let productNumber = element['Product Number'];
        delete element['Product Number'];
        // remove white spaces/caps in the product number to make accessing keys easier
        productNumber = productNumber.split(' ').join('')
        productNumber = productNumber.toLowerCase();
        product[productNumber] = element;
      });
    return product;
  }
  const products = arrayToObject(json);
  console.log(products);

  // fs.writeFile('./object.json', JSON.stringify(products, null, 4), (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   };
  //   console.log("JSON file has been created");
  // });

});


// // LOAD CHEERIO
// const $ = cheerio.load("");
//
// function createLayout () {
// 	const layoutWrapper = $("<table></table>");
// 	const layoutSetupList = process.argv;
//
// 	// LOOP THROUGH LAYOUT SETUP LIST RECEIVED FROM THE COMMAND LINE
// 	for (let position = 2; position < layoutSetupList.length; position += 1) {
// 		const columnCount = layoutSetupList[position];
//
// 		// THE LAYOUT CAN'T CONTAIN ZERO OR NEGATIVE NUMBER OF COLUMNS
// 		if (columnCount < 1) {
// 			throw new Error ("The argument value has to be at least 1!");
// 		}
//
// 		// ADD EMPTY ROW
// 		const tr = $("<tr></tr>");
// 		layoutWrapper.append(tr);
//
// 		// AND EMPTY CELL
// 		const td = $("<td></td>");
// 		tr.append(td);
//
// 		// IF ELEMENT HAS MORE THAN ONE COLUMN, WE POPUATE THE CELL WITH MULTI-COLUMN ELEMENT
// 		if (columnCount > 1) {
// 			td.append(createMultiColumn(columnCount));
// 		}
// 	}
//
// 	return layoutWrapper;
// }
//
// function createMultiColumn(columnCount) {
//
// 	const multiColTable = $("<table></table>");
// 	const tr = $("<tr></tr>");
//
// 	multiColTable.append(tr);
//
// 	for (let cols = 0; cols < columnCount; cols += 1) {
// 		const td = $("<td></td>");
// 		tr.append(td);
// 	}
//
// 	return multiColTable;
// }
//
//
// const layout = createLayout();
//
// $("body").append(layout);
//
// console.log(pretty($.html()));
