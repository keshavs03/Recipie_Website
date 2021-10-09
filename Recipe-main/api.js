function getData(){
    console.log("started getData");
    url = 
    fetch(url).then((response)=>{
        console.log("inside first then")
        return response.json();
    }).then((data)=>{
        console.log("inside sec");
        console.log(data);
    })
//     fuck you
}
console.log("before runi")
getData()
