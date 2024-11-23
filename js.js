const grandparent=document.querySelector("#grand");
const parent=document.querySelector("#parent");
const child=document.querySelector("#child");

grandparent.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Grandparent clicked (capturing phase)");
        grandparent.style.backgroundColor = "coral";
        setTimeout(() => {
            grandparent.style.backgroundColor = "white";
        }, 2000); 
    }, 2000); 
}, true); 

parent.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Parent clicked (capturing phase)");
        parent.style.backgroundColor = "yellow";
        setTimeout(() => {
            parent.style.backgroundColor = "white";
        }, 2000); 
    }, 3000); 
}, true); 

child.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Child clicked (capturing phase)");
        child.style.backgroundColor = "green";
        setTimeout(() => {
            child.style.backgroundColor = "white";
        }, 2000); 
    }, 4000); 
}, true);