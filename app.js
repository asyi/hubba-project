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

  const product1Name = `<p id="product1Name" style="margin: 0 0 10px 0; height: 19px; font-style: italic; font-family: 'Open Sans', sans-serif; font-size: 11px; line-height: 1.73; color: #263137;">${products.product1['Company Name']} - ${products.product1['Product Name']}</p>`
  const product1Description = `<p id="product1Description" style="font-family: 'Open Sans', sans-serif; font-size: 11px; font-style: italic; line-height: 1.73; color: #263137; margin: 0 0 0 0; padding-bottom: 20px;">${products.product1['Product Description']}`
  const product1Price = `<p id="product1Price" style="color: #263137; font-family: 'Open Sans', sans-serif; font-size: 11px; text-align: left; margin: 0px; line-height: 25px;">${products.product1['MSPR']}`

  const product2Name = `<p id="product2Name" style="margin: 0 0 10px 0; height: 19px; font-style: italic; font-family: 'Open Sans', sans-serif; font-size: 11px; line-height: 1.73; color: #263137;">${products.product2['Company Name']} - ${products.product2['Product Name']}</p>`
  const product2Description = `<p id="product2Description" style="font-family: 'Open Sans', sans-serif; font-size: 11px; font-style: italic; line-height: 1.73; color: #263137; margin: 0 0 0 0; padding-bottom: 20px;">${products.product2['Product Description']}`
  const product2Price = `<p id="product2Price" style="color: #263137; font-family: 'Open Sans', sans-serif; font-size: 11px; text-align: left; margin: 0px; line-height: 25px;">${products.product2['MSPR']}`

  const product3Name = `<p id="product3Name" style="margin: 0 0 10px 0; height: 19px; font-style: italic; font-family: 'Open Sans', sans-serif; font-size: 11px; line-height: 1.73; color: #263137;">${products.product3['Company Name']} - ${products.product3['Product Name']}</p>`
  const product3Description = `<p id="product3Description" style="font-family: 'Open Sans', sans-serif; font-size: 11px; font-style: italic; line-height: 1.73; color: #263137; margin: 0 0 0 0; padding-bottom: 20px;">${products.product3['Product Description']}`
  const product3Price = `<p id="product3Price" style="color: #263137; font-family: 'Open Sans', sans-serif; font-size: 11px; text-align: left; margin: 0px; line-height: 25px;">${products.product3['MSPR']}`

  // Load HTML template with cheerio
  const $ = cheerio.load('<!DOCTYPE html><html lang=\"en\" xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head> <meta charset=\"utf-8\"> <meta name=\"viewport\" content=\"width=device-width\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"x-apple-disable-message-reformatting\"> <title>Hubba Email<\/title> <link href=\"https:\/\/fonts.googleapis.com\/css?family=Open+Sans\" rel=\"stylesheet\" type=\"text\/css\"> <style> html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important; } * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; } div[style*=\"margin: 16px 0\"] { margin: 0 !important; } table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; } table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; } table table table { table-layout: auto; } img { -ms-interpolation-mode:bicubic; } *[x-apple-data-detectors], .x-gmail-data-detectors, .x-gmail-data-detectors *, .aBn { border-bottom: 0 !important; cursor: default !important; color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .a6S { display: none !important; opacity: 0.01 !important; } img.g-img + div { display: none !important; } .button-link { text-decoration: none !important; } <\/style><\/head><body width=\"100%\" background-color: #eeeeee; style=\"margin: 0; mso-line-height-rule: exactly;\"> <center style=\"width: 100%; background-color: #eeeeee; text-align: left;\"> <div style=\"max-width: 600px; margin: auto;\" class=\"email-container\"> <!-- Email Body : BEGIN --> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\" class=\"email-container\"> <!-- Hero + Button : BEGIN --> <tr> <td background=\"http:\/\/i67.tinypic.com\/wuicy1.png\" width=\"600\" height=\"285\" valign=\"top\"> <!--[if gte mso 15]> <v:rect xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"true\" stroke=\"false\" style=\"width:600px;height:285px;\"> <v:fill type=\"tile\" src=\"https:\/\/ibb.co\/mXFmwR\"\/> <v:textbox inset=\"0,0,0,0\"> <![endif]--> <div> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td style=\"padding: 40px 40px 20px; text-align: left;\"> <h1 style=\"width: 383px; height:108px; margin: 0; font-family: \'Open Sans\', sans-serif; font-size: 36px; line-height: 1.5; color: #ffffff; font-weight: 300;\">Hubba\'s best camping products 2017<\/h1> <\/td> <\/tr> <tr> <td style=\"padding: 0 40px 40px; font-family: \'Open Sans\', sans-serif; font-size: 13px; line-height: 20px; opacity:0.86;\"> <!-- Button : BEGIN --> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\" style=\"margin: auto;\"> <tr> <td style=\"border-radius: 12.5px; background: #91a4b5; text-align: center;\" class=\"button-td\"> <div><!--[if mso]> <v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"http:\/\/www.hubba.com\" style=\"height:29px;v-text-anchor:middle;width:136px;\" arcsize=\"0%\" stroke=\"f\" fill=\"t\"> <v:fill type=\"tile\" src=\"http:\/\/i64.tinypic.com\/jg7bz4.png\" color=\"\" \/> <w:anchorlock\/> <center style=\"color:#ffffff;font-family:\'Open Sans\',sans-serif;font-size:13px;font-weight:bold;\">Order<\/center> <\/v:roundrect> <![endif]--> <a href=\"http:\/\/www.hubba.com\" style=\"background-image:url(http:\/\/i64.tinypic.com\/jg7bz4.png);border-radius:12.5px;color:#ffffff;display:inline-block;font-family:\'Open Sans\',sans-serif;font-size:13px;font-weight:300;line-height:29px;text-align:center;text-decoration:none;width:136px;-webkit-text-size-adjust:none;mso-hide:all;\">Order <\/a> <\/div> <\/td> <\/tr> <\/table> <!-- Button : END --> <\/td> <\/tr> <\/table> <\/div> <!--[if gte mso 15]> <\/v:textbox> <\/v:rect> <![endif]--> <\/td> <\/tr> <!-- Hero + Button : END --> <!-- Body-Top : BEGIN --> <tr> <td bgcolor=\"#ffffff\"> <!-- Email Intro : BEGIN --> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px; font-family: \'Open Sans\', sans-serif; color: #888888; line-height:18px;\"> <tr> <td style=\"padding-top: 30px; padding-bottom: 0px; padding-left: 50px; padding-right: 50px; width: 500px; height: 80px; font-family: \'Open Sans\', sans-serif; font-size: 14px; color: #263137; text-align: left\"> <p style=\"margin: 0;\">Hi Doug <\/br> <br> We think that you\'re going to love these new incredible brands from Hubba. Check them out here. <\/br> <\/p> <\/td> <\/tr> <\/table> <!-- Email Intro : END --> <\/td> <\/tr> <!-- Body-Top : END --> <!-- PRODUCT 1: BEGIN --> <tr> <td dir=\"ltr\" bgcolor=\"#ffffff\" align=\"center\" height=\"100%\" valign=\"top\" width=\"100%\" style=\"padding: 0;\"> <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" width=\"100%\" style=\"max-width:600px;\"> <tr> <td align=\"center\" valign=\"top\" style=\"font-size:0; padding: 20px 0;\"> <div style=\"display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"padding-left: 78px;\"> <img src=\"http:\/\/i68.tinypic.com\/2zq56c4.png\" width=\"144.5px\" height=\"130.1px\" border=\"0\" alt=\"alt_text\" class=\"center-on-narrow\" style=\"width: 100%; max-width: 144.5px; height: 130.1px; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;\"> <\/td> <\/tr> <\/table> <\/div> <div style=\"display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 47.5px; padding-right: 50px; text-align: left;\" class=\"center-on-narrow\"> <table id=\"product1-purchase-table\"> <!-- Product 1 Company Name + Product Name --> <tr class=\"purchase-tr\" <td class=\"purchase-td\"> <div class=\"price\"> <table style=\"float: left;\" class=\"price-table\"> <tr class=\"price-tr\"> <td id=\"product-1-price-td\"> <!-- Product 1 Price --> <\/td> <\/tr> <\/table> <\/div> <!-- Button : BEGIN --> <div class=\"order\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"center-on-narrow\"> <tr> <td style=\"border-radius: 12.5px; background: #FFFFFF; text-align: center;\" class=\"button-td\"> <a href=\"http:\/\/www.hubba.com\" style=\"background: #FFFFFF; border: 1px solid #91a4b5; font-family: sans-serif; font-size: 11px; width: 80px; height: 25px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 12.5px;\" class=\"button-a\"> <span style=\"line-height: 25px; color:#364751;\" class=\"button-link\">Order<\/span> <\/a> <\/td> <\/tr> <\/table> <\/div> <!-- Button : END --> <\/td> <\/tr> <\/table> <\/td> <\/tr> <\/table> <\/div> <\/td> <\/tr> <\/table> <\/td> <\/tr> <!-- Product 2 : BEGIN --> <tr> <td dir=\"ltr\" bgcolor=\"#ffffff\" align=\"center\" height=\"100%\" valign=\"top\" width=\"100%\" style=\"padding: 0;\"> <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" width=\"100%\" style=\"max-width:600px;\"> <tr> <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"font-size:0; padding: 20px 0;\"> <div style=\"display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"padding-left: 78px;\"> <img src=\"http:\/\/i68.tinypic.com\/2zq56c4.png\" width=\"144.5px\" height=\"130.1px\" border=\"0\" alt=\"alt_text\" class=\"center-on-narrow\" style=\"width: 100%; max-width: 144.5px; height: 130.1px; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;\"> <\/td> <\/tr> <\/table> <\/div> <div style=\"display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 47.5px; padding-right: 50px; text-align: left;\" class=\"center-on-narrow\"> <table id=\"product2-purchase-table\"> <!-- Product 2 Company Name + Product Name --> <tr class=\"purchase-tr\" <td class=\"purchase-td\"> <div class=\"price\"> <table style=\"float: left;\" class=\"price-table\"> <tr class=\"price-tr\"> <td id=\"product-2-price-td\"> <!-- Product 2 Price --> <\/td> <\/tr> <\/table> <\/div> <!-- Button : BEGIN --> <div class=\"order\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"center-on-narrow\"> <tr> <td style=\"border-radius: 12.5px; background: #FFFFFF; text-align: center;\" class=\"button-td\"> <a href=\"http:\/\/www.hubba.com\" style=\"background: #FFFFFF; border: 1px solid #91a4b5; font-family: sans-serif; font-size: 11px; width: 80px; height: 25px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 12.5px;\" class=\"button-a\"> <span style=\"line-height: 25px; color:#364751;\" class=\"button-link\">Order<\/span> <\/a> <\/td> <\/tr> <\/table> <\/div> <!-- Button : END --> <\/td> <\/tr> <\/table> <\/td> <\/tr> <\/table> <\/div> <\/td> <\/tr> <\/table> <\/td> <\/tr> <!-- Product 3 : BEGIN --> <tr> <td dir=\"ltr\" bgcolor=\"#ffffff\" align=\"center\" height=\"100%\" valign=\"top\" width=\"100%\" style=\"padding: 0;\"> <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" width=\"100%\" style=\"max-width:600px;\"> <tr> <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"font-size:0; padding: 20px 0;\"> <div style=\"display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"padding-left: 78px;\"> <img src=\"http:\/\/i68.tinypic.com\/2zq56c4.png\" width=\"144.5px\" height=\"130.1px\" border=\"0\" alt=\"alt_text\" class=\"center-on-narrow\" style=\"width: 100%; max-width: 144.5px; height: 130.1px; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;\"> <\/td> <\/tr> <\/table> <\/div> <div style=\"display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;\" class=\"stack-column\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"> <tr> <td dir=\"ltr\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 47.5px; padding-right: 50px; text-align: left;\" class=\"center-on-narrow\"> <table id=\"product3-purchase-table\"> <!-- Product 3 Company Name + Product Name --> <tr class=\"purchase-tr\" <td class=\"purchase-td\"> <div class=\"price\"> <table style=\"float: left;\" class=\"price-table\"> <tr class=\"price-tr\"> <td id=\"product-3-price-td\"> <!-- Product 3 Price--> <\/td> <\/tr> <\/table> <\/div> <!-- Button : BEGIN --> <div class=\"order\"> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"center-on-narrow\"> <tr> <td style=\"border-radius: 12.5px; background: #FFFFFF; text-align: center;\" class=\"button-td\"> <a href=\"http:\/\/www.hubba.com\" style=\"background: #FFFFFF; border: 1px solid #91a4b5; font-family: sans-serif; font-size: 11px; width: 80px; height: 25px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 12.5px;\" class=\"button-a\"> <span style=\"line-height: 25px; color:#364751;\" class=\"button-link\">Order<\/span> <\/a> <\/td> <\/tr> <\/table> <\/div> <!-- Button : END --> <\/td> <\/tr> <\/table> <\/td> <\/tr> <\/table> <\/div> <\/td> <\/tr> <\/table> <\/td> <\/tr> <!-- Body-Bottom : BEGIN --> <tr> <td bgcolor=\"#ffffff\"> <!-- Email Footer : BEGIN --> <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px; font-family: \'Open Sans\', sans-serif; color: #888888; line-height:18px;\"> <tr> <td bgcolor=\"#ffffff\" style=\"padding-left: 50px; padding-right: 50px; width: 500px; height: 101px; font-family: \'Open Sans\', sans-serif; font-size: 14px; color: #263137; text-align: left\"> <p style=\"margin-top: 20px;\"> We hope that you love these products. If you don\'t please let us know how we can help. We\'d love to hear from you! <br\/> <br>Cheers,<\/br> The Team at Hubba <\/p> <\/td> <\/tr> <\/table> <!-- Email Footer : END --> <\/td> <\/tr> <!-- Body-Bottom : END --> <\/table> <!-- Email Body : END --> <\/div> <\/center><\/body><\/html>', {
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
