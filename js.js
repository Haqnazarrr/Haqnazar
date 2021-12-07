display = document.querySelector('.input');
equal = document.querySelector('.equal');
display1 = document.querySelector('.input1');

function sum(num) {
    display.innerHTML += num;
}
 
function back() {
    qiymat = display.innerHTML;
    k = qiymat.split('');
    k.pop();
    y = k.join('');
    display.innerHTML = y
}

function javob() {
    qiymat = display.innerHTML;
    if (qiymat) {
        display.innerHTML = eval(qiymat)
    }
    
}
function clean() {
    display.innerHTML = ''
}

function protsent() {
    qiymat = display.innerHTML;
    a = qiymat/100;
    display.innerHTML = a
}
function kvadrat() {
    qiymat = display.innerHTML;
    l = qiymat*qiymat
    display.innerHTML =l
}

function ildiz() {
    natija = display.innerHTML;
    l = Math.sqrt(natija);
    display.innerHTML = l
}

function pi() {
    let pi = Math.PI;
    display.innerHTML =  pi;                                                    
}

































// eng katta qiymatni topish
//  let nums = [-1,78,897,456,65464];
// nums = Math.max(...nums);
//  console.log(nums)