//Static variables to store pixel dimensions of grid
const gridHeight = 500;
const gridWidth = 500;
//Current values of cells per side
let cellNumber = 16;
let cellHeight;
let cellWidth;
//Important DOM elements
let grid = document.querySelector('#container');
let reset = document.querySelector('#resetSketch');

/*Randomly generates rgb value, checks for current rgb value if set then darkens by 10%
*returns rgb value
*/
let generateRgb = (rgb=null) => {
    let rValue;
    let gValue;
    let bValue;

    if(rgb == null){
        rValue = Math.round(Math.random() * 255);
        gValue = Math.round(Math.random() * 255);
        bValue = Math.round(Math.random() * 255);
    }else{
        let values = rgb.split(",");
        let value1 = values[0].split('(')[1];
        let value2 = values[1];
        let value3 = values[2].split(')');
        rValue = Math.round(parseInt(value1)*0.8);
        gValue = Math.round(parseInt(value2)*0.8);
        bValue = Math.round(parseInt(value3)*0.8);
    }

    return `rgb(${rValue}, ${gValue}, ${bValue})`;
};

/*Changes the background color of a triggered cell to a random rbg value
*/
let highlightCell = (e) => {
    let backgroundColor = e.path[0].style.backgroundColor;
    
    if(!backgroundColor){
        e.path[0].style.backgroundColor = generateRgb();
    }else{
        e.path[0].style.backgroundColor = generateRgb(backgroundColor);
     }
    
};


/*Creates html node of one cell
*returns node, takes no arguments
*/
let generateCell = () => {
    let newCell = document.createElement('div');
    newCell.className = 'gridCell';
    newCell.setAttribute('style', `width:${cellWidth}px;`);
    newCell.addEventListener('mouseenter', (e) => {
        highlightCell(e);
    });
    return newCell;
};

/*Takes user input, convertes to int, if not a number or is outside range of 2-64 throws error
*returns error message or int
*/
let promptUserInput = () => {
    let userInput = parseInt(prompt('Choose a grid size'));
    if(userInput != null && userInput >= 2 && userInput <= 64){
        cellNumber = userInput;
    }
    return userInput;
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
    let prompt = promptUserInput();

    if(prompt != null && prompt >= 2 && prompt <= 64){
        if(grid.childNodes != null){
            grid.innerHTML = "";
        }
        generateGrid();
    }else{
        alert('Invalid entry. Please enter a number between 2 and 64');
    }
};

/*Prompts user on start 
*/
let startGrid = () => {
    resetGrid();
    reset.addEventListener('click', () => {
        resetGrid();
    });
};

//Start the Grid 
startGrid();
