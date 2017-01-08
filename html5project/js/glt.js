/*bananer*/










/*中间body-center*/
	window.onload=function(){
		
	
		var lis=document.getElementsByClassName("lis");    //获取导航
		   //获取导航
		var slide=document.getElementsByClassName("Box");//获取导航内容
		//获取导航内容
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var j=0;j<lis.length;j++){
					slide[j].style.display="none";
					lis[j].style.color="";
				}
				slide[this.index].style.display="block";
				lis[this.index].style.color="#88C23A";
			}
		}
	
		
	}
		
		var lis=document.getElementsByClassName("shi");    //获取导航
		   //获取导航
		var slide=document.getElementsByClassName("chang");//获取导航内容
		//获取导航内容
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var j=0;j<lis.length;j++){
					slide[j].style.display="none";
					lis[j].style.color="";
				}
				slide[this.index].style.display="block";
				lis[this.index].style.color="#88C23A";
			}
		}










