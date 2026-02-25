alert("Hello World");
function endtheworld(){
    const mainTextElement=document.getElementById("main-text");
    if (mainTextElement.innerText==="by by world")
    {
        mainTextElement.innerText="Hello World";

    }
    else{
        mainTextElement.innerText="by by world";
    }
}