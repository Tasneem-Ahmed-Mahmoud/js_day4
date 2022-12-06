let PAR=document.getElementById("PAR");
// let Font=document.getElementsByName("Font");

//////////////////font ///////
function arial(){
    PAR.style.fontFamily="arial";
}

function courier(){
    PAR.style.fontFamily="courier";
}
function georgia(){
    PAR.style.fontFamily="georgia";
}

function impact(){
    PAR.style.fontFamily="impact";
}
function timesnewroman(){
    PAR.style.fontFamily="timesnewroman";
}
function verdana(){
    PAR.style.fontFamily ="verdana"
}
////////// text-align/////////////

function justify(){
    PAR.style.textAlign="justify"
}
function center(){
    PAR.style.textAlign="center"
}
function left(){
    PAR.style.textAlign="left"
}
function right(){
    PAR.style.textAlign="right"
}
////////////////lineHeight//////////////
function linenone(){
    PAR.style.lineHeight="normal"
}

function line1(){
    PAR.style.lineHeight="10px" 
}
function line2(){
    PAR.style.lineHeight="15px" 
}
function line3(){
    PAR.style.lineHeight="1.5px" 
}
////////////letterSpacing////////////////////////////
function letternone(){
    PAR.style.letterSpacing="normal"
}

function letter1(){
    PAR.style.letterSpacing="-1px"
}
function letter2(){
    PAR.style.letterSpacing="2px"
}
function letter3(){
    PAR.style.letterSpacing="3px"
}
////////////////textIndent////////

function text1(){
    PAR.style.textIndent="0px"
}
function text2(){
    PAR.style.textIndent="5px"
}
function text3(){
    PAR.style.textIndent="15px"
}

function text4(){
    PAR.style.textIndent="25px"
}

//////////textTransform/////////

function  textnone(){
    PAR.style.textTransform="none"
}

function  capitalize(){
    PAR.style.textTransform="capitalize"
}
function  uppercase(){
    PAR.style.textTransform="uppercase"
}
function  lowercase(){
    PAR.style.textTransform="lowercase"
}

////////////////textDecoration/////////
function text(){
    PAR.style.textDecoration="none"
}


function line(){
    PAR.style.textDecoration="line-through"
}

function overline(){
    PAR.style.textDecoration="overline"
}
function underline(){
    PAR.style.textDecoration="underline"
}


///////////////////textBorder/////////


function  none(){
    PAR.style.border="none"
}
function  dotted(){
    PAR.style.border="3px dotted"
}
function  double(){
    PAR.style.border="3px double"
}
function  groove(){
    PAR.style.border="3px groove"
}
function  dashed(){
    PAR.style.border="3px dashed"
}
function  insert(){
    PAR.style.border="3px insert"
}
function  solid(){
    PAR.style.border="3px solid "
}
function  outset(){
    PAR.style.border="3px outset"
}

function  ridge(){
    PAR.style.border="3px ridge"
}
///////////////////Bordercolor//////////////////
function  black(){
    PAR.style.borderColor="black"
}

function pink() {
    PAR.style.borderColor="pink"
}


function red() {
    PAR.style.borderColor="red"
}
function  ChangeBorderColor(color){
    PAR.style.borderColor=`${color}`
}
function  blue(){
    PAR.style.borderColor="blue"
}
function  yellow(){
    PAR.style.borderColor="yellow"
}
function  purple(){
    PAR.style.borderColor="purple"
}

