// LOAD CHEERIO
const pretty = require('pretty');
const cheerio = require('cheerio');

const $ = cheerio.load("");

function createLayout () {
  const centerWrapper = $("<center></center");

  //add email container div
  const div= $("<div></div>");
  centerWrapper.append(div);

	return centerWrapper;
}

const layout = createLayout();

$("body").append(layout);

console.log(pretty($.html()));
