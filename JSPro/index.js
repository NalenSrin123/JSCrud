const btnAdd=document.querySelector('#btnAdd');
const formAdd=document.querySelector(".add-products")
btnAdd.addEventListener('click',()=>{
    formAdd.style.visibility='visible';
})
document.querySelector(".btn-cancel").addEventListener('click',()=>{
    formAdd.style.visibility='hidden';
})
let code=document.querySelector('#code');
let name=document.querySelector('#names');
let qty=document.querySelector('#qty');
let price=document.querySelector('#price');
let image1=document.querySelector('#image1');
let image2=document.querySelector('#image2');
const btnSave=document.querySelector('.btn-save');
const boxCard=document.querySelector('.box-card');
    
btnSave.addEventListener('click',()=>{
    formAdd.style.visibility='hidden';
    var img1=image1.files[0];
    var img2=image2.files[0];
    boxCard.innerHTML+=`
        <div class="card">
                <div class="image">
                    <img class="img1" src="${URL.createObjectURL(img1)}" alt="">
                    <img class="img2" src="${URL.createObjectURL(img2)}" alt="">
                </div>
                <div class="title p-2">
                    <h5>${name.value}</h5>
                    
                    <p class="text-danger">Price:${price.value} riels</p>
                    <button class="btn btn-outline-primary float-end">Buy</button>
                </div>
           </div>
    `;

})
