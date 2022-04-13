// const content = [
//     {
//         id: 1,
//         color: `Gold`,
//         imgUrl: "https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2",
//         imgSlider: ["https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2", "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da", "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1", "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad", "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3"],
//         ram: [
//             {
//                 GB: 8,
//                 Memory: [
//                     {
//                         name: `M1/8/256 Gold`,
//                         size: 256,
//                         price: `12 497 000`
//                     },
//                     {
//                         name: `M1/8/512 Gold`,
//                         size: 512,
//                         price: `15 066 000`
//                     }
//                 ]
//             },
//             {
//                 GB: '16GB',
//                 Memory: [
//                     {
//                         name: `M1/16/256 Gold`,
//                         size: 256,
//                         price: `16 935 000`
//                     },
//                     {
//                         name: `M1/16/512 Gold`,
//                         size: 512,
//                         price: `19 270 500`
//                     },
//                     {
//                         name: `M1/16/1tb Gold`,
//                         size: 1,
//                         price: `20 438 500`
//                     }
//                 ]
//             }
//         ],

//     },
//     {
//         id: 2,
//         color: `Silver`,
//         imgUrl: "https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36",
//         imgSlider: ["https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36", "https://cdn.macbro.uz/macbro/d015e206-9a55-4fe3-a7f9-749889ee16e1", "https://cdn.macbro.uz/macbro/cf0894d4-199a-47e8-ae41-54ac5bd6517f", "https://cdn.macbro.uz/macbro/5862b288-7fd8-4589-83d0-45f9c2a81abc", "https://cdn.macbro.uz/macbro/24086655-8b18-481b-8261-b6c70a0fb9d7"],
//         ram: [
//             {
//                 GB: 8,
//                 Memory: [
//                     {   
//                         name: `M1/8/256 Silver`,
//                         size: 256,
//                         price: `12 497 000`
//                     },
//                     {
//                         name: `M1/8/512 Silver`,
//                         size: 512,
//                         price: `15 066 000`
//                     }
//                 ]
//             },
//             {
//                 GB: 16,
//                 Memory: [
//                     {
//                         name: `M1/16/256 Silver`,
//                         size: 256,
//                         price: `16 935 000`
//                     },
//                     {
//                         name: `M1/16/512 Silver`,
//                         size: 512,
//                         price: `19 270 500`
//                     },
//                     {
//                         name: `M1/16/1tb Silver`,
//                         size: 1,
//                         price: `21 606 500` 
//                     }
//                 ]
//             }
//         ],

//     },
//     {
//         id: 3,
//         color: `Grey`,
//         imgUrl: "https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3",
//         imgSlider: ["https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3", "https://cdn.macbro.uz/macbro/abf793d6-19be-47bb-809d-adfc4314811c", "https://cdn.macbro.uz/macbro/7873cda1-1854-4524-a919-07e34576cb08", "https://cdn.macbro.uz/macbro/4931c161-2138-4976-9784-47f4a6f580e6", "https://cdn.macbro.uz/macbro/c190d5ec-36f5-4046-9818-133de39f4df6"],
//         ram: [
//             {
//                 GB: 8,
//                 Memory: [
//                     {
//                         name: `M1/8/256 Grey`,
//                         size: 256,
//                         price: `12 497 000`
//                     },
//                     {
//                         name: `M1/8/512 Grey`,
//                         size: 512,
//                         price: `15 066 000`
//                     }
//                 ]
//             },
//             {
//                 GB: 16,
//                 Memory: [
//                     {
//                         name: `M1/16/256 Grey`,
//                         size: 256,
//                         price: `16 935 000`
//                     },
//                     {
//                         name: `M1/16/512 Grey`,
//                         size: 512,
//                         price: `19 270 500`
//                     },
//                     {
//                         name: `M1/16/1tb Grey`,
//                         size: 1,
//                         price: `21 606 500`
//                     }
//                 ]
//             }
//         ],

//     }
// ];





const macObj = {
    name: "Mac Book Air 13-inch",
    ram: [
        {
            ramSize: 8,
            active: false,
            memory: [
                {
                    active: true,
                    size: 256,
                    price: 12000000,
                },
                {
                    active: false,
                    size: 512,
                    price: 15000000,
                },
            ],
        },
        {
            ramSize: 16,
            active: false,
            memory: [
                {
                    active: true,
                    size: 256,
                    price: 17000000,
                },
                {
                    active: true,
                    size: 512,
                    price: 20000000,
                },
                {
                    active: false,
                    size: 1024,
                    price: 21000000,
                },
            ],
        },
        {
            ramSize: 32,
            active: true,
            memory: [
                {
                    active: false,
                    size: 256,
                    price: 17000000,    
                },
                {
                    active: true,
                    size: 512,
                    price: 20000000,
                },
                {
                    active: false,
                    size: 1024,
                    price: 21000000,
                },
            ],          
        },
        
    ],
    colors: [
        {
            name: "Gold",
            imgUrl: "https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2",
            imgSlider: ["https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2", "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da", "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1", "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad", "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3"],
        },
        {
            name: "Silver",
            imgUrl: "https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36",
            imgSlider: ["https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36", "https://cdn.macbro.uz/macbro/d015e206-9a55-4fe3-a7f9-749889ee16e1", "https://cdn.macbro.uz/macbro/cf0894d4-199a-47e8-ae41-54ac5bd6517f", "https://cdn.macbro.uz/macbro/5862b288-7fd8-4589-83d0-45f9c2a81abc", "https://cdn.macbro.uz/macbro/24086655-8b18-481b-8261-b6c70a0fb9d7"],
        },
        {
            name: "Grey",
            imgUrl: "https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3",
            imgSlider: ["https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3", "https://cdn.macbro.uz/macbro/abf793d6-19be-47bb-809d-adfc4314811c", "https://cdn.macbro.uz/macbro/7873cda1-1854-4524-a919-07e34576cb08", "https://cdn.macbro.uz/macbro/4931c161-2138-4976-9784-47f4a6f580e6", "https://cdn.macbro.uz/macbro/c190d5ec-36f5-4046-9818-133de39f4df6"],
        }
    ],
};


//-------------ram Btn -----------------

let smBtns = document.querySelector('.product__sm-btns')
macObj.ram.forEach((item)=>{
    let btnram = document.createElement("button")
    btnram.className ='product__sm-btn'
    btnram.innerHTML =`${item.ramSize}GB`
    smBtns.classList.add('d-flex')
    smBtns.appendChild(btnram)
   
})


//-------------memory Btn -----------------


let bgBtns = document.querySelector('.product__bg-btns')

macObj.ram.forEach((item,ind)=>{
        if (item.active == true) {
                item.memory.forEach((el)=>{
                    let btnsize = document.createElement('button')
                    btnsize.className = `product__sl-btn`
                    btnsize.innerHTML = `${el.size}GB`
                    bgBtns.classList.add('d-flex')
                    bgBtns.appendChild(btnsize)
                    
                })
             
    
        }
})
//-------------ram demo active -----------------

let smBtn = document.querySelectorAll(".product__sm-btn")
let resultRam = document.querySelector('.product-ram')
smBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        macObj.ram.forEach((el, id) => {
            el.active = false
            if (i == id) {
                el.active = true
                memory(el)
            }
            console.log(el);
        })  
    })
})

function memory(e) {
    macObj.ram.forEach((item)=>{
        smBtn.forEach((el)=>{
            if (item.ramSize == e.ramSize ) {
                el.classList.add("btn-act")
                resultRam.innerHTML = item.ramSize
    
            }
        })
    })
}



// console.log(smBtn);
// macObj.ram.forEach((item, idx) => {
//     smBtn.forEach((el, idn) => {
//         if (item.active == true && idn == idx) {
//             el.classList.add("btn-act")
//             resultRam.innerHTML = item.ramSize

//         }
//     })
// })

//-------------memory demo active -----------------

let slBtn = document.querySelectorAll(".product__sl-btn")
let resultMemory = document.querySelector('.product-memory')

console.log(slBtn);
macObj.ram.forEach((item) => {
    item.memory.forEach((il , idx)=>{
        slBtn.forEach((el, idn) => {
            if (item.active == true ) {
                if ( il.active == true && idn == idx) {
                    el.classList.add("btn-act")
                    resultMemory.innerHTML = il.size
                }
            }
        })
    })
})













let colorBtn = document.querySelectorAll(".product__bg-btn");
let imgWrapper = document.querySelector(".imgs__wrapper")
let imgAlter = document.querySelectorAll('.img__alter')
let colorText = document.querySelector(".color-product")
colorBtn.forEach((item)=>{
    macObj.colors.forEach((el)=>{
            item.addEventListener('click',()=>{
                if (el.name == item.textContent.trim()) {
                    colorText.innerHTML = `${el.name}`
                   imgWrapper.innerHTML =`
                   <img src="${el.imgUrl}" alt="img">`
                    imgAlter.forEach((ul,u)=>{
                        el.imgSlider.forEach((ol ,i)=>{
                            if (u == i) {
                                ul.innerHTML =`<img src="${ol}" alt="">`
                            }
                        })
                    })
                }   
            })
        })
    })
