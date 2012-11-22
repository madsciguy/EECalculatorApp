// JavaScript Document

function calculateSeriesLED() { 


//get IDs
var sVoltage = document.getElementById('textinput');
var dVoltage = document.getElementById('textinput2');
var current = document.getElementById('textinput3');

var result = document.getElementById('textinput4');
result.value=0;

//CHECK IF 0 or non Number
//if(sVoltage.value=="" || sVoltage.value!=parseFloat(sVoltage.value)) sVoltage.value=0;

//if(dVoltage.value=="" || dVoltage.value!=parseFloat(dVoltage.value)) dVoltage.value=0;

//if(supply.value=="" || current.value!=parseFloat(current.value)) current.value=0;


result.value=(parseFloat(sVoltage.value)-parseFloat(dVoltage.value))/(parseFloat(current.value)/(1000)) + " Ohm";

}



function calculateResistor(){

var resistorArray = new Array();
var resistor = new Array();	
//get IDs
var selector = document.getElementById("selectmenuResistor").selectedIndex;
resistorArray[0] = document.getElementById("Resistor1").value;
resistorArray[1] = document.getElementById("Resistor2").value;
resistorArray[2] = document.getElementById("Resistor3").value;
resistorArray[3] = document.getElementById("Resistor4").value;
resistorArray[4] = document.getElementById("Resistor5").value;
var result = document.getElementById("ResistorResult");
var holder =0;

for(var i=0; i<resistorArray.length;i++){
if(resistorArray[i] !='')
{
	resistor.push(resistorArray[i]);
}
}


//series
if(selector == 0){
	
	for(var i=0; i<resistor.length;i++){
		holder = holder + parseFloat(resistor[i]);
		
	}

	}
//parallel
else{
	for(var i=0; i<resistor.length;i++){
	holder = holder + (1/resistor[i]);	 	
	}
	holder = 1/holder;
}

result.value = holder;
}





function calculateCapacitor(){



var capacitorArray = new Array();
var capacitor = new Array();	
//get IDs
var selector = document.getElementById("selectmenuCapacitor").selectedIndex;
capacitorArray[0] = document.getElementById("Capacitor1").value;
capacitorArray[1] = document.getElementById("Capacitor2").value;
capacitorArray[2] = document.getElementById("Capacitor3").value;
capacitorArray[3] = document.getElementById("Capacitor4").value;
capacitorArray[4] = document.getElementById("Capacitor5").value;
var result = document.getElementById("CapacitorResult");
var holder =0;

for(var i=0; i<capacitorArray.length;i++){
if(capacitorArray[i] !='')
{
	capacitor.push(capacitorArray[i]);
}
}


//series
if(selector == 1){
	
	for(var i=0; i<capacitor.length;i++){
		holder = holder + parseFloat(capacitor[i]);
		
	}

	}
//parallel
else{
	for(var i=0; i<capacitor.length;i++){
	holder = holder + (1/capacitor[i]);	 	
	}
	holder = 1/holder;
}

result.value = holder;
}



function calculateResistorCode4(){


//window.alert("in resistor code 4");
//get IDs
var band = new Array();	
band[0] = document.getElementById("select-choice-4-1").selectedIndex;
band[1] = document.getElementById("select-choice-4-2").selectedIndex;
band[2] = document.getElementById("select-choice-4-3").selectedIndex;
band[3] = document.getElementById("select-choice-4-4").selectedIndex;

for(var i =0; i< band.length; i++)
{
	if(band[i] != 0){band[i]--;}
	else{ band[i] = '?';}
}
//window.alert(band[0]);
//window.alert(band[1]);
//window.alert(band[2]);
//window.alert(band[3]);


var result = document.getElementById("result4");
var tol = tolerance(band[3]);

result.value= (10*band[0]+band[1])*Math.pow(10,band[2])+ " Ohm " + "+/- " + tol;
}



function calculateResistorCode5(){

//get IDs
	
var band = new Array();	
band[0] = document.getElementById("select-choice-5-1").selectedIndex;
band[1] = document.getElementById("select-choice-5-2").selectedIndex;
band[2] = document.getElementById("select-choice-5-3").selectedIndex;
band[3] = document.getElementById("select-choice-5-4").selectedIndex;
band[4] = document.getElementById("select-choice-5-5").selectedIndex;

for(var i =0; i< band.length; i++)
{
	if(band[i] != 0){band[i]--;}
	else{ band[i] = '?';}
}
//window.alert(band[0]);
//window.alert(band[1]);
//window.alert(band[2]);
//window.alert(band[3]);


var result = document.getElementById("result5");
var tol = tolerance(band[4]);

result.value= (100*band[0]+10*band[1]+band[2])*Math.pow(10,band[3])+ " Ohm " + "+/- " + tol;
}


function calculateResistorCode6(){

//get IDs
var band = new Array();	
band[0] = document.getElementById("select-choice-6-1").selectedIndex;
band[1] = document.getElementById("select-choice-6-2").selectedIndex;
band[2] = document.getElementById("select-choice-6-3").selectedIndex;
band[3] = document.getElementById("select-choice-6-4").selectedIndex;
band[4] = document.getElementById("select-choice-6-5").selectedIndex;
band[5] = document.getElementById("select-choice-6-6").selectedIndex;

for(var i =0; i< band.length; i++)
{
	if(band[i] != 0){band[i]--;}
	else{ band[i] = '?';}
}
//window.alert(band[0]);
//window.alert(band[1]);
//window.alert(band[2]);
//window.alert(band[3]);


var result = document.getElementById("result6");
var tol = tolerance(band[4]);
var temp =tempco(band[5]);

result.value= (100*band[0]+10*band[1]+band[2])*Math.pow(10,band[3]) +" Ohm " + "+/- " + tol + " "  + temp + " ppm/K";
}



function calculate555(){
//get IDs

var r1 = document.getElementById("textinputR1").value;
var r2 = document.getElementById("textinputR2").value;
var c = document.getElementById("textinputC").value;

var t1 = document.getElementById("textinputT1");
var t2 = document.getElementById("textinputT2");
var freq = document.getElementById("textinputFreq");



/// 555 Timer code goes here
t1.value = (0.693*(parseFloat(r1)+parseFloat(r2)))*parseFloat(c) + " ms";
t2.value = (0.693*parseFloat(r2)*parseFloat(c)) + " ms"; 
freq.value = (1.44/((parseFloat(r1)+parseFloat(r2)+parseFloat(r2))*parseFloat(c)))+ " khz";
}


function tolerance(tol){
var result;

switch(tol)
{
case 1://brown
  result ="1%";
  break;
case 2://red
  result ="2%";
  break;
case 3://green
  result ="0.5%";
  break;
case 4://blue
  result ="0.25%";
  break;
case 5://violet
  result ="0.10%";
  break;
case 6://gray
  result ="0.05%";
  break;
case 7://gold
  result ="5%";
  break;
case 8://silver
  result ="10%";
  break;
default:
  result ='?%';
}
return result;
	
}


function tempco(temp){
	
	var result;
	
	switch(temp)
{
case 0:
  result ="250";
  break;
case 1:
  result ="100";
  break;
case 2:
  result ="50";
  break;
case 3:
  result ="15";
  break;
case 4:
  result ="25";
  break;
case 5:
  result ="20";
  break;
case 6:
  result ="10";
  break;
case 7:
  result ="5";
  break;
case 8:
  result ="1";
  break;

default:
  result ='?';
}
return result;
	
}


function capacitorCodes(){

//get IDs

var input = document.getElementById("capInput").value;
var outputPF = document.getElementById("outputPF");
var outputNF = document.getElementById("outputNF");
var outputUF = document.getElementById("outputUF");

if((input.length != 3) || (input != parseInt(input))){ 
outputPF.value = "Only 3 digits accepted";
outputNF.value = "Only 3 digits accepted";
outputUF.value = "Only 3 digits accepted";
}
else{

var firstTwoDigits = input.substring(0,1);
var thirdDigit = input.substring(2);

var output = firstTwoDigits*Math.pow(10,thirdDigit);

outputPF.value = output + " pF";
outputNF.value = output /100 + " nF";
outputUF.value = output/100000 + " uF";
	
}	
}




function calculateOHM(){

var inputVoltage = document.getElementById("inputVoltage");
var inputCurrent = document.getElementById("inputCurrent");
var inputResistance = document.getElementById("inputResistance");
var inputPower = document.getElementById("inputPower");
var button = document.getElementById("calculateOHM");



if(inputVoltage.value=='' && inputCurrent.value=='' && inputResistance.value!=''&& inputPower.value!=''){
	inputVoltage.value =Math.sqrt(inputPower.value*inputResistance.value);
	inputCurrent.value = Math.sqrt((inputPower.value/inputResistance.value));}
else if(inputVoltage.value=='' && inputResistance.value=='' && inputCurrent.value!=''&& inputPower.value!=''){
	inputVoltage.value =inputPower.value/inputCurrent.value;
	inputResistance.value= inputPower.value/(inputCurrent.value*inputCurrent.value)}
else if(inputVoltage.value=='' && inputPower.value=='' && inputCurrent.value!=''&& inputResistance.value!=''){
	inputVoltage.value = inputCurrent.value*inputResistance.value;
	inputPower.value = inputCurrent.value*inputCurrent.value*inputResistance.value}
else if(inputCurrent.value=='' && inputResistance.value=='' && inputVoltage.value!=''&& inputPower.value!=''){
	inputCurrent.value =inputPower.value/inputVoltage.value;
	inputResistance.value = inputPower.value/(inputCurrent.value*inputCurrent.value);}
else if(inputCurrent.value=='' && inputPower.value=='' && inputResistance.value!=''&& inputVoltage.value!=''){
	inputCurrent.value=inputVoltage.value/inputResistance.value;
	inputPower.value=(inputVoltage.value*inputVoltage.value)/inputResistance.value}
else if(inputResistance.value=='' && inputPower.value=='' && inputCurrent.value!=''&& inputVoltage.value!=''){
	inputResistance.value= inputVoltage.value/inputCurrent.value;
	inputPower.value=inputCurrent.value*inputVoltage.value;}
else{}


//CALCULATE AND CLEAR CODE
//if(button.value=="Calculate"){
//	button.value="Clear";
//		}
//else{
//	button.value ="Calculate";
//inputVoltage.value = '';
//inputCurrent.value ='';
//inputResistance.value='';
//inputPower.value='';}
}





$('.band4').live('tap vmouseover vmouseout vclick', calculateResistorCode4);
$('.band5').live('tap vmouseover vmouseout vclick', calculateResistorCode5);
$('.band6').live('tap vmouseover vmouseout vclick', calculateResistorCode6);
$('.capCodes').live('tap vmouseover vmouseout vclick', capacitorCodes);
$('.timer555').live('tap vmouseover vmouseout vclick', calculate555);
$('.seriesLED').live('tap vmouseover vmouseout vclick', calculateSeriesLED);
$('.resistor').live('tap vmouseover vmouseout vclick', calculateResistor);
$('.capacitor').live('tap vmouseover vmouseout vclick', calculateCapacitor);




	  




