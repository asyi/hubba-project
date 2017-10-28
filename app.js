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

  const product1Name = `<p id="product1Name">${products.product1['Company Name']} - ${products.product1['Product Name']}</p>`
  const product1Description = `<p id="product1Description">${products.product1['Product Description']}`
  const product1Price = `<p id="product1Price">${products.product1['MSPR']}`

  const product2Name = `<p id="product2Name">${products.product2['Company Name']} - ${products.product2['Product Name']}</p>`
  const product2Description = `<p id="product2Description">${products.product2['Product Description']}`
  const product2Price = `<p id="product2Price">${products.product2['MSPR']}`

  const product3Name = `<p id="product3Name">${products.product3['Company Name']} - ${products.product3['Product Name']}</p>`
  const product3Description = `<p id="product3Description">${products.product3['Product Description']}`
  const product3Price = `<p id="product2Price">${products.product2['MSPR']}`

  // Build html file
  const $ = cheerio.load('<ul>Stuff</ul><p id="product1"></p><p id="product2"></p>');
  $(product1Name).appendTo('#product1')
  $(product1Description).appendTo('#product1')
  $(product1Price).appendTo('#product1')

  $(product2Name).appendTo('#product2')
  $(product2Description).appendTo('#product2')
  $(product2Price).appendTo('#product2')

  $.html()


  console.log(pretty($.html()));

});
