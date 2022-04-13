const macObj = {
    name: "Mac Book Air 13-inch",
    ram: [{
            ramSize: 8,
            active: true,
            memory: [{
                    active: true,
                    size: 256,
                    price: `12 497 000`,
                },
                {
                    active: false,
                    size: 512,
                    price: `15 066 000`,
                },
            ],
        },
        {
            ramSize: 16,
            active: false,
            memory: [{
                    active: true,
                    size: 256,
                    price: `16 935 000`,
                },
                {
                    active: true,
                    size: 512,
                    price: `19 270 500`,
                },
                {
                    active: false,
                    size: 1024,
                    price: `20 438 500`,
                },
            ],
        },

    ],
    colors: [{
            name: "Gold",
        imgUrl: ["https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2", "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da", "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1", "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad", "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3"],
            imgSlider: ["https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2", "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da", "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1", "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad", "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3"],
        },
        {
            name: "Silver",
            imgUrl: ["https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36", "https://cdn.macbro.uz/macbro/d015e206-9a55-4fe3-a7f9-749889ee16e1", "https://cdn.macbro.uz/macbro/cf0894d4-199a-47e8-ae41-54ac5bd6517f", "https://cdn.macbro.uz/macbro/5862b288-7fd8-4589-83d0-45f9c2a81abc", "https://cdn.macbro.uz/macbro/24086655-8b18-481b-8261-b6c70a0fb9d7"],
            imgSlider: ["https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36", "https://cdn.macbro.uz/macbro/d015e206-9a55-4fe3-a7f9-749889ee16e1", "https://cdn.macbro.uz/macbro/cf0894d4-199a-47e8-ae41-54ac5bd6517f", "https://cdn.macbro.uz/macbro/5862b288-7fd8-4589-83d0-45f9c2a81abc", "https://cdn.macbro.uz/macbro/24086655-8b18-481b-8261-b6c70a0fb9d7"],
        },
        {
            name: "Grey",
            imgUrl: ["https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3", "https://cdn.macbro.uz/macbro/abf793d6-19be-47bb-809d-adfc4314811c", "https://cdn.macbro.uz/macbro/7873cda1-1854-4524-a919-07e34576cb08", "https://cdn.macbro.uz/macbro/4931c161-2138-4976-9784-47f4a6f580e6", "https://cdn.macbro.uz/macbro/c190d5ec-36f5-4046-9818-133de39f4df6"],
            imgSlider: ["https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3", "https://cdn.macbro.uz/macbro/abf793d6-19be-47bb-809d-adfc4314811c", "https://cdn.macbro.uz/macbro/7873cda1-1854-4524-a919-07e34576cb08", "https://cdn.macbro.uz/macbro/4931c161-2138-4976-9784-47f4a6f580e6", "https://cdn.macbro.uz/macbro/c190d5ec-36f5-4046-9818-133de39f4df6"],
        }
    ],
};


let listBtn = document.querySelector(".product__sm-btns");
let listMemory = document.querySelector(".product__bg-btns");
let price = document.querySelector(".product__price");
let sale = document.querySelector(".product__sale")
let plus = document.querySelector(".product__plus");
let minus = document.querySelector(".product__minus")
let ramResult = document.querySelector(".product-ram")
let memoryResult = document.querySelector(".product-memory")
let counter = document.querySelector('.product__num')

price.innerHTML = 0;
let save = 0
let total = 0
let count = 1
plus.addEventListener('click',()=>{
    count++
    let n = total.split(" ").join("");
    price.innerHTML = `${n*count} so'm`
    counter.innerHTML = count
    sale.innerHTML = `${save * count} so'm`
})
minus.addEventListener('click', () => {
    if (1<count) {
        count--

        let n = total.split(" ").join("");
        price.innerHTML = `${n * count} so'm`
        counter.innerHTML = count
        sale.innerHTML = `${save * count} so'm`
    }
    
})

function priceTotal(obj) {
    obj.ram.forEach((el) => {
        if (el.active) {
            el.memory.forEach((element) => {
                if (element.active) {
                    price.innerHTML = `${element.price} so'm`;
                    total = element.price;
                    let s = element.price.split(" ").join("")
                    let a = s*0.15  
                    let l = +s+a
                    sale.innerHTML = `${l} so'm`
                    save = l

                }
            });
        }
    });
}
priceTotal(macObj);

function addBtnRam(macObj) {
    listBtn.innerHTML = "";
    listMemory.innerHTML = "";
    macObj.ram.forEach((element) => {
        let btn = document.createElement("button");
        btn.className = "product__sm-btn";
        if (element.active) {
            btn.classList.add("btn-act");
            ramResult.innerHTML = element.ramSize
            element.memory.forEach((item) => {
                let btn = document.createElement("button");
                btn.className = "product__sm-btn";

                if (item.active) {
                    btn.classList.add("btn-act");
                    memoryResult.innerHTML = item.size
                }
                btn.innerHTML = `${item.size}GB`;
                listMemory.appendChild(btn);
            });
        }

        btn.innerHTML = `${element.ramSize}GB`;
        listBtn.appendChild(btn);
    });
}
addBtnRam(macObj);
count = 1
listBtn.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
        element.active = false;
        if (
            element.ramSize ==
            e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
        ) {
            element.active = true;
        }
    });
    isAcitve(macObj);
    priceTotal(macObj);
    addBtnRam(macObj);
});

function isAcitve(macObj) {
    count = 1

    listMemory.addEventListener("click", (e) => {
        macObj.ram.forEach((element) => {
            element.memory.forEach((el) => {
                el.active = false;
                if (
                    el.size == e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
                ) {
                    el.active = true;
                }
            });
        });
        priceTotal(macObj);
        addBtnRam(macObj);
    });
}

isAcitve(macObj);


let colorBtn = document.querySelectorAll(".product__bg-btn");
let imgWrapper = document.querySelector(".imgs__wrapper")
let imgAlter = document.querySelectorAll('.img__alter')
let colorText = document.querySelector(".color-product")
let bgImgs = document.querySelectorAll(".imgs__wrapper img")
colorBtn.forEach((item) => {
    macObj.colors.forEach((el) => {
        item.addEventListener('click', () => {
            if (el.name == item.textContent.trim()) {
                colorText.innerHTML = `${el.name}`
                el.imgUrl.forEach((em,i)=>{
                    bgImgs.forEach((yl,ip)=>{
                        if (i == ip) {
                            yl.src=em
                        }
                    })
                })
                imgAlter.forEach((ul, u) => {
                    el.imgSlider.forEach((ol, i) => {
                        if (u == i) {
                            ul.innerHTML = `<img src="${ol}" alt="">`
                        }
                    })
                })
            }

        })
    })
})
imgAlter.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
            imgWrapper.style.transform = `translateX(-${idx*520}px)`
    })

})
let modalWrap = document.querySelector(".modal-wrapper")
let modalAlter = document.querySelectorAll(".modal-alter")
modalAlter.forEach((item, idx) => {
    item.addEventListener('click', () => {
        modalWrap.style.transform = `translateX(-${idx * 520}px)`
    })

})
let fulscreen = document.querySelector(".fullscreen")
let modalscreen = document.querySelector(".modal-full")

let modal = document.querySelector(".modal-fullscreen")
fulscreen.addEventListener("click",()=>{
    modal.classList.add("modal-block")
})
modalscreen.addEventListener('click',()=>{
    modal.classList.remove("modal-block")
})