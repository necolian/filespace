function post(){
	
	
alert("js loaded.");

//getリクエスト
var post = new XMLHttpRequest();
post.open(GET,"https://httbin.org");
post.send();

post.onreadystatechange = function() {

	if(post.readystate === 4 && post.status === 200){
  
  	alert( post.responseText );
  
	}else{

	alert("error   status = " + post.status );

	}
 
}


}
