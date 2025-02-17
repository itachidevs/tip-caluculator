const btnContainer=document.getElementById("btn-container");
const bill=document.getElementById("bill");
const noOfPeople=document.getElementById("people");
const tipEement=document.getElementById('tip');
const totalEement=document.getElementById('total');
const resetBtn=document.getElementById('reset');
console.log(tipEement,totalEement)
const PERCENTAGES=[5,10,15,25,50];
const form=document.getElementById('form');
var percentage,customPercentage=0,billInput=0,people=0;
function handleEvent(event){
    event.preventDefault();
   console.log(percentage,customPercentage,billInput,people); 
if(customPercentage!=0)
{
    percentage=customPercentage;
}
const tip=billInput*percentage;
const total=tip+billInput;

const tipAmount=(tip/people).toFixed(2);

const totalAmount=(total/people).toFixed(2);

console.log(tipAmount,totalAmount);
 tipEement.textContent=`$ ${tipAmount}`;
totalEement.textContent=`$ ${totalAmount}`;

bill.value=''
noOfPeople.value=''

    
}

const resett=(event)=>{
tipEement.textContent='$0.00';
totalEement.textContent='$0.00';
buttons.forEach((btn)=>{
    btn.classList.remove('btn-clicked');
});

}

const updatebill=(event)=>{
    billInput=event.target.value;
}

const updatePeople=(event)=>{
    people=event.target.value;
}

const percentageSelect=(event)=>{
event.target.classList.add("btn-clicked");
console.log(event.target.value);
const buttons=document.querySelectorAll('.btn');
buttons.forEach((btn)=>{
    if(btn.classList.contains('btn-clicked') && event.target!==btn)
    {
        btn.classList.toggle('btn-clicked');
    }
});
percentage=event.target.value;

}

const updatecustomPercentage=(event)=>{
    const percentage=event.target.value;
    customPercentage  = percentage;
}

for(let i=0;i<PERCENTAGES.length;i++)
{
    const btn = document.createElement("button");
    btn.textContent=PERCENTAGES[i]+"%";
    btn.classList.add("btn");
    btn.value=PERCENTAGES[i];
    btnContainer.appendChild(btn);
    btn.addEventListener('click',percentageSelect)
    btn.type='submit'
}
const btn=document.createElement('input');
btn.classList.add('custom','btn');
btnContainer.appendChild(btn);
btn.placeholder='Custom';
btn.type="number";
btn.addEventListener('change',updatecustomPercentage);
bill.addEventListener('change',updatebill);
noOfPeople.addEventListener('change',updatePeople);
resetBtn.addEventListener('click',reset)
form.addEventListener('submit',handleEvent)
