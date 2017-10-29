// require the csvtojson converter class, cheerio, fs and pretty
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
  // store json objects in variable called products
  const products = arrayToObject(json);
  console.log(products);

  // create variables to store HTML with JSON

  const product1Name = `<p id="product1Name">${products.product1['Company Name']} - ${products.product1['Product Name']}</p>`
  const product1Description = `<p id="product1Description">${products.product1['Product Description']}`
  const product1Price = `<p id="product1Price">${products.product1['MSPR']}`

  const product2Name = `<p id="product2Name">${products.product2['Company Name']} - ${products.product2['Product Name']}</p>`
  const product2Description = `<p id="product2Description">${products.product2['Product Description']}`
  const product2Price = `<p id="product2Price">${products.product2['MSPR']}`

  const product3Name = `<p id="product3Name">${products.product3['Company Name']} - ${products.product3['Product Name']}</p>`
  const product3Description = `<p id="product3Description">${products.product3['Product Description']}`
  const product3Price = `<p id="product2Price">${products.product2['MSPR']}`

  // Load HTML template with cheerio
  const $ = cheerio.load('<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="x-apple-disable-message-reformatting"> <title>Hubba Email</title> <style> html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important; } * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; } div[style*="margin: 16px 0"] { margin: 0 !important; } table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; } table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; } table table table { table-layout: auto; } img { -ms-interpolation-mode:bicubic; }</style><body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee"> <center> <div class="email-wrapper"> <table class="hero-table" border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- Hero + Button START --> <tr class="hero-tr"> <td class="hero-td"> <table class="hero-text"> <tr class="hero-text-tr"> <td class="hero-text-td"> <h1 class="hero-text-h1"> <!-- Overlay text --> </h1> </td> </tr> <tr class="hero-button-tr"> <td class="hero-button-td"> <!-- Button --> <table class="hero-button-table"> <tr class="hero-button-table-tr"> <td class="hero-button-table-td"> <a class="hero-button-table-link"> <span class="hero-button-span"> </span> </a> </td> </tr> </table> <!-- Button END --> </td> </tr> </table> </td> </tr> <!-- Hero + Button END --> <!-- Body-intro START --> <tr class="intro-tr"> <td class="intro-td"> <table class="intro-table"> <tr class="intro-table-tr"> <td class="intro-table-td"> <p class="intro-greeting-text"> <!-- Body-intro text --> </p> <p class="intro-body-text"> <!-- Body-intro text --> </p> </td> </tr> </table> </td> </tr> <!-- Body-intro END --> <!-- Products START --> <!-- Product 1 START --> <tr style=class="products-tr"> <td class="products-td"> <table class="product-table"> <tr class="product-tr"> <td class="product-td"> <!-- Thumbnail-left START --> <div class="thumbnail-left"> <table class="thumbnail-table"> <tr class="thumbnail-tr"> <td class="thumbnail-td"> <img class="thumbnail-img"> <!-- Product Image --> </td> </tr> </table> </div> <!-- Thumbnail-left END --> <!-- Text-right START --> <div class="text-right"> <table class="text-right-table"> <tr class="text-right-tr"> <td class="text-right-td"> <!-- Price + Button START --> <table id="product1-purchase-table"> <tr class="purchase-tr"> <td class="purchase-td"> <div class="price"> <table class="price-table"> <tr class="price-tr"> <td id="product-1-price-td"> </td> </tr> </table> </div> <div class="order"> <table class="order-table"> <tr class="order-tr"> <td class="order-td"> <a class="order-button"> <span class="order-span"> <!-- Button --> </span> </a> </td> </tr> </table> </div> </td> </tr> </table> <!-- Price + Button END --> </td> </tr> </table> </div> <!-- Text-right END --> </td> </tr> </table> </td> </tr> <!-- Product 1 END --> <!-- Product 2 START --> <tr style=class="products-tr"> <td class="products-td"> <table class="product-table"> <tr class="product-tr"> <td class="product-td"> <!-- Thumbnail-left START --> <div class="thumbnail-left"> <table class="thumbnail-table"> <tr class="thumbnail-tr"> <td class="thumbnail-td"> <img class="thumbnail-img"> <!-- Product Image --> </td> </tr> </table> </div> <!-- Thumbnail-left END --> <!-- Text-right START --> <div class="text-right"> <table class="text-right-table"> <tr class="text-right-tr"> <td class="text-right-td"> <!-- Price + Button START --> <table id="product2-purchase-table"> <tr class="purchase-tr"> <td class="purchase-td"> <div class="price"> <table class="price-table"> <tr class="price-tr"> <td id="product-2-price-td"> </td> </tr> </table> </div> <div class="order"> <table class="order-table"> <tr class="order-tr"> <td class="order-td"> <a class="order-button"> <span class="order-span"> <!-- Button --> </span> </a> </td> </tr> </table> </div> </td> </tr> </table> <!-- Price + Button END --> </td> </tr> </table> </div> <!-- Text-right END --> </td> </tr> </table> </td> </tr> <!-- Product 2 END --> <!-- Product 3 START --> <tr style=class="products-tr"> <td class="products-td"> <table class="product-table"> <tr class="product-tr"> <td class="product-td"> <!-- Thumbnail-left START --> <div class="thumbnail-left"> <table class="thumbnail-table"> <tr class="thumbnail-tr"> <td class="thumbnail-td"> <img class="thumbnail-img"> <!-- Product Image --> </td> </tr> </table> </div> <!-- Thumbnail-left END --> <!-- Text-right START --> <div class="text-right"> <table class="text-right-table"> <tr class="text-right-tr"> <td class="text-right-td"> <!-- Price + Button START --> <table id="product3-purchase-table"> <tr class="purchase-tr"> <td class="purchase-td"> <div class="price"> <table class="price-table"> <tr class="price-tr"> <td id="product-3-price-td"> </td> </tr> </table> </div> <div class="order"> <table class="order-table"> <tr class="order-tr"> <td class="order-td"> <a class="order-button"> <span class="order-span"> <!-- Button --> </span> </a> </td> </tr> </table> </div> </td> </tr> </table> <!-- Price + Button END --> </td> </tr> </table> </div> <!-- Text-right END --> </td> </tr> </table> </td> </tr> <!-- Product 3 END --> <!-- Products END --> <!-- Body-bottom START --> <tr class="footer-tr"> <td class="footer-td"> <table class="footer-table"> <tr class="footer-table-tr"> <td class="footer-table-td"> <p class="footer-text"> <!-- Body-bottom text --> </p> <p class="footer-outro"> <!-- Body-bottom text --> </p> <p class="footer-signature"> <!-- Body-bottom text --> </p> </td> </tr> </table> </td> </tr> <!-- Body-bottom END --> </table> <!-- Email content END --> </div> </center></body></html>', {
    xmlMode: true
  });

  // Insert variables holding HTML and JSON into the loaded template
  $(product1Description).prependTo('#product1-purchase-table')
  $(product1Name).prependTo('#product1-purchase-table')
  $(product1Price).appendTo('#product-1-price-td')

  $(product2Description).prependTo('#product2-purchase-table')
  $(product2Name).prependTo('#product2-purchase-table')
  $(product2Price).appendTo('#product-2-price-td')

  $(product3Description).prependTo('#product3-purchase-table')
  $(product3Name).prependTo('#product3-purchase-table')
  $(product3Price).appendTo('#product-3-price-td')

  // Use pretty to format HTML and store it in a variable called emailTemplate
  const emailTemplate = pretty($.html());

  console.log(pretty($.html()));

  // Use fs to output an html document containing emailTemplate
  fs.writeFile('./email.html', emailTemplate, (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("Email file has been created");
  });
});
