// * UI

let composition = app.project.activeItem;

// ? Make a Window for the buttons
let myWindow = new Window("palette", "Comp Size", undefined);
myWindow.orientation = 'column';

// ? Add text saying what the window is
let windowText = myWindow.add('statictext', undefined, 'Scoreboard Comp Sizes');

// ? Button Group
let compSizeButtonGroup = myWindow.add('group', undefined, '');
compSizeButtonGroup.orientation = 'row';

// todo Button one change a composition size to make a comp 1920 x 1080 px
let mainBoardButton = compSizeButtonGroup.add('button', undefined, 'Main Board Size');
mainBoardButton.onClick = function() {
    if(composition.height !== 1080 && composition.width !== 1920) {
        changeCompSize();
        }
}

// todod Button two change a composition size to make a comp 3072 x 256 px 
let ribbonBoardButton = compSizeButtonGroup.add('button', undefined, 'Ribbon Board Size');
ribbonBoardButton.onClick = function() {
    if(composition.height !== 256 && composition.width !== 3072) {
    changeCompSize();
    }
}
// * =======================
 

// * FUNCTIONS
// ? Changes the comp size
function changeCompSize() {
    // ! This ensures they have to have a comp selected
    if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert('You have no compostion selected');
        return false;
    } 

    if(composition.height !== 1080 && composition.width !== 1920) {
    composition.width = 1920;
    composition.height = 1080;
    } else {
        if(composition.height !== 256 && composition.width !== 3072) {
        composition.width = 3072;
        composition.height = 256;
    }
}
}


// * =======================





// * STARTUP
myWindow.center();
myWindow.show();

// * =======================


