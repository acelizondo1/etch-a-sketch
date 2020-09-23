//Static variables to store pixel dimensions of grid
const gridHeight = 500;
const gridWidth = 500;
//Current values of cells per side
let cellNumber = 16;
let cellHeight;
let cellWidth;
//Important DOM elements
let grid = document.querySelector('#container');

/*Randomly generates rgb value, checks for current rgb value if set then darkens by 10%
*returns rgb value
*/
let generateRgb = () => {

};

/*Changes the background color of a triggered cell to a random rbg value
*/
let highlightCell = () => {

};


/*Creates html node of one cell
*returns node, takes no arguments
*/
let generateCell = () => {
    let newCell = document.createElement('div');
    newCell.className = 'gridCell';
    newCell.setAttribute('style', `width:${cellWidth}px;`);
    return newCell;
};

/*Takes user input, convertes to int, if not a number or is outside range of 2-64 throws error
*returns error message or int
*/
let promptUserInput = () => {

};

/*Creates grid based off cellNumber, checks if current grid is empty, if not then resets
*this has no return value
*/
let generateGrid = () => {
    cellHeight = gridHeight/cellNumber;
    cellWidth = gridWidth/cellNumber;
    let gridRowAttribute = 'grid-template-rows:'
    
    for(y = 0; y < cellNumber; y++){
        for(x = 0; x < cellNumber; x++){
            grid.appendChild(generateCell());
        }
    }
};

/*Prompts user for new grid size, resets current grid and runs generateGrid with new value
*/
let resetGrid = () => {

};

/*Prompts user on start 
*/
let startGrid = () => {

};

//Start the Grid 
generateGrid();
