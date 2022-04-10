
setTimeout(promptbox, 2000)                                
function promptbox(){
    var text;
    food = prompt ("რა არის თქვენი საყვარელი ქართული საჭმელი")
    if(food == null || food == ""){
        text = "თქვენ არ შეგივსიათ ველი"
    }else{
        text = "თქვენი საყვარელი საჭმელია: " + food + "!"
    }
    document.getElementById("paragraph").innerHTML = text;
}
                                /* array */
let x = ""
const tasty_food = {
    georgian_food:[
        {kutxe: "kaxeti", sachmeli:[" მწვადი", "ჩაქაფული", "ჩიხირთმა"]},
        {kutxe: "Samegrelo", sachmeli:[" ღომი", "გებჟალია", "ჯურჯანი"]},
        {kutxe: "Imereti", sachmeli:["ჭყინტი ყველი", "ხაჭაპური", "კუჭმაჭი"]},
    ]
}

for(let a in tasty_food.georgian_food){
    x += "<h1>" + tasty_food.georgian_food[a].kutxe + "</h1>"
    for(let b in tasty_food.georgian_food[a].sachmeli){
        x += "<p>" + tasty_food.georgian_food[a].sachmeli[b] + "</p>"
    }
}
document.getElementById("blist").innerHTML = x;