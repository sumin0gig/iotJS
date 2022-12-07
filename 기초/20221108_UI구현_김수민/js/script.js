function name(){
    let address = document.querySelector("#contents .img .category")
    if(address.className == "category view"){
        address.className ="category view-on";
    }else {
        address.className = "category view"
    }
}