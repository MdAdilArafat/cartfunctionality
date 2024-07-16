var product = [
    {name:"gol chair",heading:"golgola",price:"14,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"gol chair",heading:"golgola",price:"5,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"gol chair",heading:"golgola",price:"16,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var popular = [
    {name:"gol chair",heading:"golgola",price:"14,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"gol chair",heading:"golgola",price:"5,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"gol chair",heading:"golgola",price:"16,000",image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var cart =[]

function addproducts(){
    var clutter = ""
    product.forEach(function(obj,index){
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img src="${obj.image}" alt=""></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.heading}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.name}.</h3>
                    <h4 class="font-semibold mt-2">${obj.price}</h4>
                </div>
                <button data-index=${index} class=" add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index=${index}
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    })
    document.querySelector(".products").innerHTML = clutter
    console
} 

function addPopular(){
    var clutter =""
    popular.forEach(function(obj){
        clutter +=`  <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] h-[100%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${obj.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${obj.heading}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.name}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter
}

function addCart(){
    document.querySelector(".products").addEventListener("click",function(details){
        if (details.target.classList.contains("add")){
            cart.push(product[details.target.dataset.index])
            
        }
    })
}
function showCarts(){
   document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display = "block"
        var clutter =""
        cart.forEach(function(prod){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" alt="">
            </div>
            <div>
                <h3 class="font-semibold">${prod.heading}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div>`
        })
        document.querySelector(".cartexpnd").innerHTML = clutter
   })
}
showCarts()
addCart()
addproducts()
addPopular()