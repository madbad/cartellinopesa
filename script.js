var dati ={
	primopeso:{
		data:'23/07/2013',
		ora:'08:50:45',
		rcd:'42',
		progressivo:'1936',
		peso:'17000',
	},
	secondopeso:{
		data:'23/07/2013',
		ora:'10:50:26',
		progressivo:'1937',
		peso:'15000',
	}
};




var list={};
console.log('scipting!')
var img = new Image();
img.src = './img/cartellino.jpg';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  //img.style.display = 'none';
  console.log('loaded!');
/*
big={};
big.1
*/

list.SmallProgressivoSup={
	x:1145,
	y:330,
	w:180,
	h:30,
}

list.SmallCodiceRCDSup={
	x:1145,
	y:360,
	w:465,
	h:30,
}

list.BigPrimoPeso={
	x:1145,
	y:390,
	w:180,
	h:60,
}
list.BigSecondoPeso={
	x:1947,
	y:843,
	w:180,
	h:60,
}
list.BigNettoPesata={
	x:1947,
	y:903,
	w:180,
	h:60,
}
list.Separatore={
	x:1145,
	y:450,
	w:530,
	h:30,
}
list.Small2={
	x:1149,
	y:293,
	w:14,
	h:30,
}
list.Small3={
	x:1164,
	y:293,
	w:14,
	h:30,
}
list.SmallSbarra={
	x:1178,
	y:293,
	w:14,
	h:30,
}
list.Small0={
	x:1192,
	y:293,
	w:14,
	h:30,
}
list.Small7={
	x:1207,
	y:293,
	w:14,
	h:30,
}
list.Small1={
	x:1265,
	y:293,
	w:14,
	h:30,
}
list.Small8={
	x:1561,
	y:293,
	w:14,
	h:30,
}
list.SmallDuepunti={
	x:1575,
	y:293,
	w:14,
	h:30,
}
list.Small5={
	x:1635,
	y:293,
	w:14,
	h:30,
}
list.Small4={
	x:1635,
	y:361,
	w:14,
	h:30,
}
list.Small9={
	x:1621,
	y:327,
	w:14,
	h:30,
}

list.Small6={ //manca
	x:0,
	y:0,
	w:14,
	h:30,
}

list.Big1={
	x:2345,
	y:845,
	w:16,
	h:55,
}
list.Big6={
	x:2360,
	y:845,
	w:16,
	h:55,
}
list.Big7={
	x:2377,
	y:845,
	w:16,
	h:55,
}
list.Big4={
	x:2391,
	y:845,
	w:16,
	h:55,
}
list.Big0={
	x:2405,
	y:845,
	w:16,
	h:55,
}
list.Big5={
	x:2376,
	y:898,
	w:16,
	h:55,
}
list.Big9={
	x:2360,
	y:898,
	w:16,
	h:55,
}
list.Big3={
	x:2345,
	y:792,
	w:16,
	h:55,
}
list.Big2={
	x:2376,
	y:792,
	w:16,
	h:55,
}
list.Big8={ //manca
	x:0,
	y:0,
	w:14,
	h:30,
}
list.BigKg={
	x:2436,
	y:792,
	w:32,
	h:55,
}

/*
	var line=0;
	var col=0;
	for (textfiled in list){
		  char=list[textfiled]
//		console.log(char);

		  ctx.drawImage(
			// use img as the source for clipping
			img,
			// clip the next cell from the img at x,y 
			// and clip out a subimage with size colWidth x rowHeight
			char.x,char.y,char.w,char.h,
			// draw the clipped subimage to the canvas
			col,line,char.w,char.h
		  );
		  //debug
		  ctx.rect(char.x,char.y,char.w,char.h);
		  ctx.stroke(); 	
		  line=line+char.h;
		  //col=col+char.w;

	}
*/
//Scrivo la parte superiore	
Scrivi(	x=268, y=330,list.SmallProgressivoSup)
Scrivi(	x=268, y=360,list.SmallCodiceRCDSup)
Scrivi(	x=268, y=390,list.BigPrimoPeso)
Scrivi ( x=268, y=450, list.Separatore)
Scrivi(	x=752, y=392,list.BigKg)
ScriviSmallLTR(273,295,dati.primopeso.data);
ScriviSmallRTL(765,295,dati.primopeso.ora);
ScriviSmallRTL(765,327,dati.primopeso.progressivo);
ScriviSmallRTL(765,357,dati.primopeso.rcd);
ScriviBigRTL(720,392,dati.primopeso.peso);

//scrivo la parte inferiore
Scrivi(	x=268, y=730,list.SmallProgressivoSup)
Scrivi(	x=268, y=760,list.SmallCodiceRCDSup)
Scrivi(	x=268, y=790,list.BigPrimoPeso)
Scrivi(	x=268, y=843,list.BigSecondoPeso)
Scrivi(	x=268, y=903,list.BigNettoPesata)
Scrivi(	x=752, y=792,list.BigKg)
Scrivi(	x=752, y=846,list.BigKg)
Scrivi(	x=752, y=898,list.BigKg)
ScriviSmallLTR(273,695,dati.secondopeso.data);
ScriviSmallRTL(765,695,dati.secondopeso.ora);
ScriviSmallRTL(765,727,dati.secondopeso.progressivo);
ScriviSmallRTL(765,757,dati.primopeso.rcd);
ScriviBigRTL(720,792,dati.primopeso.peso);
ScriviBigRTL(720,845,dati.secondopeso.peso);
ScriviBigRTL(720,895,Math.abs(dati.secondopeso.peso * 1 - dati.primopeso.peso * 1)+'');//netto


};

function Scrivi(x,y,char){
	ctx.drawImage(
			// use img as the source for clipping
			img,
			// clip the next cell from the img at x,y 
			// and clip out a subimage with size colWidth x rowHeight
			char.x,char.y,char.w,char.h,
			// draw the clipped subimage to the canvas
			x,y,char.w,char.h
	  );
}
function ScriviSmallLTR(x,y,text){
	for (var i=0; i < text.length; i++){
		var curChar= text[i];
		if(curChar == '/') curChar='Sbarra';
		if(curChar == ':') curChar='Duepunti';
//		console.log(curChar);
//		console.log(['Small'+curChar]);
//		console.log(x,y)
		txt = list['Small'+curChar];
		Scrivi(x,y,txt);
		x = x + txt.w;
	}
}
function ScriviSmallRTL(x,y,text){
	for (var i=text.length-1; i > -1; i--){
		var curChar= text[i];
		if(curChar == '/') curChar='Sbarra';
		if(curChar == ':') curChar='Duepunti';
		console.log(curChar);
		console.log(['Small'+curChar]);
		console.log(x,y)
		txt = list['Small'+curChar];
		Scrivi(x,y,txt);
		x = x - txt.w;
	}
}

function ScriviBigRTL(x,y,text){
	for (var i=text.length-1; i > -1; i--){
		var curChar= text[i];
		if(curChar == '/') curChar='Sbarra';
		if(curChar == ':') curChar='Duepunti';
		console.log(curChar);
		console.log(['Big'+curChar]);
		console.log(x,y)
		txt = list['Big'+curChar];
		Scrivi(x,y,txt);
		x = x - txt.w;
	}
}

