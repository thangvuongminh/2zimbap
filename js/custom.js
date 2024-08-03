
const body=document.querySelector('body');
console.log(body);
const button=document.querySelectorAll('.btn');
button.forEach(item => {
    item.addEventListener('click',function()
{
    if(item.classList=='btn btn-light')
    {
        body.style.backgroundColor="#fff";
    }
    else body.style.backgroundColor="#404040";
})
});
const card=document.querySelectorAll('.money');
const price=document.querySelectorAll('.card-price')
let arrayPrice=[];
price.forEach(item => {
    arrayPrice[item.dataset.id]=item;
})
console.log(arrayPrice);
card.forEach(item => {
    item.addEventListener('click',function()
{
    arrayPrice[item.dataset.id].classList.add('active');
    card.forEach(itemMain => {
        if(itemMain!=item)
        {
            itemMain.classList.add('all')
        }
    });
})
});