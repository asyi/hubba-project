// LOAD CHEERIO
const pretty = require('pretty');
const cheerio = require('cheerio');

const $ = cheerio.load("");

function createLayout () {
	const layoutWrapper = $("<table></table>");
	const layoutSetupList = process.argv;

	// LOOP THROUGH LAYOUT SETUP LIST RECEIVED FROM THE COMMAND LINE
	for (let position = 2; position < layoutSetupList.length; position += 1) {
		const columnCount = layoutSetupList[position];

		// THE LAYOUT CAN'T CONTAIN ZERO OR NEGATIVE NUMBER OF COLUMNS
		if (columnCount < 1) {
			throw new Error ("The argument value has to be at least 1!");
		}

		// ADD EMPTY ROW
		const tr = $("<tr></tr>");
		layoutWrapper.append(tr);

		// AND EMPTY CELL
		const td = $("<td></td>");
		tr.append(td);

		// IF ELEMENT HAS MORE THAN ONE COLUMN, WE POPUATE THE CELL WITH MULTI-COLUMN ELEMENT
		if (columnCount > 1) {
			td.append(createMultiColumn(columnCount));
		}
	}

	return layoutWrapper;
}

function createMultiColumn(columnCount) {

	const multiColTable = $("<table></table>");
	const tr = $("<tr></tr>");

	multiColTable.append(tr);

	for (let cols = 0; cols < columnCount; cols += 1) {
		const td = $("<td></td>");
		tr.append(td);
	}

	return multiColTable;
}


const layout = createLayout();

$("body").append(layout);

console.log(pretty($.html()));
