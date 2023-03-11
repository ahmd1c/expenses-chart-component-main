const main = document.querySelector('main');
const chart = document.querySelector('main .chart');



async function getData(){
    let resp = await fetch('data.json');

    let data = await resp.json();

    let maxnumarr = []

    data.forEach((el)=>{

        maxnumarr.push(el.amount)

    })

    let maxnum = Math.max(...maxnumarr);

    let opNum = 150 / maxnum

    data.forEach((el)=>{
        let mini = document.createElement('div');

        mini.classList.add('mini-chart')

        let moneyEl = document.createElement('p');

        let draw = document.createElement('div');

        let dayEl = document.createElement('span');

        draw.style.height = el.amount * opNum + 'px'

        draw.classList.add('draw');

        moneyEl.innerText = `$${el.amount}`;

        dayEl.innerText = el.day;

        mini.appendChild(moneyEl)
        mini.appendChild(draw)
        mini.appendChild(dayEl)
        chart.appendChild(mini)
        
    })
    
}
getData()

document.addEventListener('click',(e)=>{
    
        if(e.target.classList.contains('draw')){
            
            const draws = document.querySelectorAll('.draw')

            draws.forEach(el=>{

                el.classList.remove('active');

                el.previousElementSibling.classList.remove('active')

            })

            e.target.classList.add('active')

            e.target.previousElementSibling.classList.add('active');
        }else{
            if(e.target.classList.contains('active')){
                return
            }
            const all = document.querySelectorAll('*');
            all.forEach(el=>{
                el.classList.remove('active')
            })
        }
})

