// JavaScript Document
//   var input = document.getElementById("input").value;
//	var div = document.getElementById("number");
	
	function enterLeft(){
	var input = document.getElementById("input").value;
	var div = document.getElementById("number");
	var len = div.children.length;
	if(len<60){
	if(!(input)||isNaN(input)){
	alert("请输入正确数值");
	}
	else if(input>=10&&input<100){
		var firstSpan = div.firstChild;
		var span = document.createElement("span");
		var img = document.createElement("img");
		img.src = 'pic.jpg';
		img.style.height = input +"px";
		span.appendChild(img);
		div.insertBefore(span,firstSpan);
		}		
		else{
			alert("输入数值应在10和100之间");
		}
	}
		}


    function enterRight(){
		var input = document.getElementById("input").value;	
		var div = document.getElementById("number");
		var len = div.children.length;
		if(len<60){
			if(!(input)||isNaN(input)){
				alert("请输入正确数值");
				}else if(input>=10&&input<100){
					var div = document.getElementById("number");
					var span = document.createElement("span");
					var img = document.createElement("img");
					img.src = 'pic.jpg';
					img.style.height = input +"px";
					span.appendChild(img);
					div.appendChild(span);
					}
					else
						alert("输入数值应在10和100之间");
	}else{
		alert("队列内数据已满，无法继续添加。");
		}
	}
		
function exitLeft(){
	var div = document.getElementById("number");
	var firstSpan = div.firstChild;
	if(!firstSpan)
	alert("无法继续删除，请添加数字");
	else{
	div.removeChild(firstSpan);
	var del = (firstSpan.innerHTML.substring(33,36));
	alert("左侧的"+del+"已被删除");
	}
	}
	
		
function exitRight(){
	var div = document.getElementById("number");
	var lastSpan = div.lastChild;
	if(!lastSpan)
	alert("无法继续删除，请添加数字");
	else{
	div.removeChild(lastSpan);
	var del = (lastSpan.innerHTML.substring(33,36));
	alert("右侧的"+del+"已被删除");
	}
	}
function swap(firstEm,secondEm){
	var temp =firstEm;
	if(firstEm>secondEm){
		temp = firstEm;
		firstEm = secondEm;
		secondEm = temp;
		}
	}
function bubbleSort(){
	var div = document.getElementById("number");
	var len = div.children.length;
	var arr = [];
	for(var i=0;i<len;i++){
		arr[i]=(div.childNodes[i].innerHTML.substring(33,36));
	}
	for(var k = 0;k<len;k++){
			if(arr[k]>arr[k+1]){
			var temp = arr[k];
			arr[k] = arr[k+1];
			arr[k+1] = temp;
			}
	}
	for(var j=0;j<len;j++){
	var sortt = document.getElementById("sortt");
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = 'pic.jpg';
	img.style.height = arr[j] +"px";
	span.appendChild(img);
	sortt.appendChild(span);
	}
}



