let para=document.querySelector("p");
let butt=document.querySelector("button");
let url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getjoke = async ()=>{
    let response =await fetch(url);
    let data =await response.json();
    console.log(response)
    para.textContent=`${data.joke}`
}

butt.addEventListener("click",getjoke);
