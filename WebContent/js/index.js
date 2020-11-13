
function clickHandler(){
	fetch('http://localhost:8080/1604020/dummy.do?name=Devi')
	  .then(response => response.json())
	  .then(json => {
		      document.getElementById("nameid").innerHTML = "After Fetching My Name is "+	json.name;
		      document.getElementById("requester").innerHTML = "That's Nice";
			  
	  }
	  );
	 
}
