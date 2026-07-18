function getFormValue(e) {
    //Write your code here
	
		e.preventDefault();
		let fname= document.getElementById("firstname").value;
		let lname= document.getElementById("lastname").value;
		alert(`${fname} ${lname}`)

}
