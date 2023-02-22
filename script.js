const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200){
     const data = JSON.parse(request.responceText);
      callback(undefined, data);
   } else if(request.readyState === 4){
      console.log("could not fetch the data");
   }
  });

request.open("GET", "todos.json");

request.send();
}

getTodos((err, data) => {
  console.log("callback fired");
  if(eer){
    console.log(err);
  } else {
    console.log(data);
  }
})
