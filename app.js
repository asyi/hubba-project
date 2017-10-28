// require the csvtojson converter class, cheerio and pretty (and fs)
const Converter = require('csvtojson').Converter;
const fs = require('fs');
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

  const product1Company = products.product1['Company Name']
  const product1Name = products.product1['Product Name']
  const product1Description = products.product1['Product Description']
  const product1Price = products.product1['MSPR']

  const product2Company = products.product2['Company Name']
  const product2Name = products.product2['Product Name']
  const product2Description = products.product2['Product Description']
  const product2Price = products.product2['MSPR']

  const product3Company = products.product3['Company Name']
  const product3Name = products.product3['Product Name']
  const product3Description = products.product3['Product Description']
  const product3Price = products.product3['MSPR']

  // Build html file
  const $ = cheerio.load('<ul>Stuff</ul><p id="product1"></p><p id="product2"></p>');
  $('<p>stuff</p>').appendTo('#product2')
  $.html()


  console.log(pretty($.html()));

});
