let input = document.querySelector('.input');
let ans = document.querySelector('.ans');
let buttons = document.querySelectorAll('button');
let erase = document.querySelector('#erase');
let clear = document.querySelector('#clear');
let result = document.querySelector('#result');


let screenValue = []

clear.addEventListener("click", function(){
    screenValue = [''];
    ans.innerHTML = 0;
    input.className = 'input';
    ans.className = 'ans';
})

buttons.forEach(button => {
    button.addEventListener("click",function(){
        if (!button.id.match('erase')) {
            screenValue.push(button.value)
            input.innerHTML = screenValue.join('');

            if(button.classList.contains('numButton')){
                // console.log(screenValue);
                ans.innerHTML = eval(screenValue.join(''));
            }
        }
        if (button.id.match('erase')) {
            screenValue.pop()
            input.innerHTML = screenValue.join('');
            ans.innerHTML = eval(screenValue.join(''));
        }
        if (button.id.match('result')){
            input.className = 'ans';
            ans.className = 'input';
         
        }
        if(typeof(eval(screenValue.join('')))=='undefined'){
            ans.innerHTML = 0
        }
    })
});