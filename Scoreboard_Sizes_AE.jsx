var composition = app.project.activeItem

function myScript(thisObj) {
    function myScript_buildUI(thisObj){
       var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Scoreboard Sizes", undefined, {resizeable:true});
       var windowText = myPanel.add('statictext', undefined, 'Scoreboard Comp Sizes');

       var compSizeButtonGroup = myPanel.add('panel', undefined, '');
      compSizeButtonGroup.orientation = 'row';

      var mainBoardButton = compSizeButtonGroup.add('button', undefined, 'Main Board Size');
      mainBoardButton.onClick = function() {
         if(composition.height !== 1080 && composition.width !== 1920) {
             changeCompSize();
             }
     }

      var ribbonBoardButton = compSizeButtonGroup.add('button', undefined, 'Ribbon Board Size');
     ribbonBoardButton.onClick = function() {
    if(composition.height !== 256 && composition.width !== 3072) {
    changeCompSize();
    }
}

       myPanel.layout.layout(true);

       return myPanel;
    }


    var myScriptPal = myScript_buildUI(thisObj);

    if (myScriptPal != null && myScriptPal instanceof Window){
       myScriptPal.center();
       myScriptPal.show();
    }



 }

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

 myScript(this);