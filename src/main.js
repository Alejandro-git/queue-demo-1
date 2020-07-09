const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')

let n = 0;
let queue = [];

btnCreateNumber.onclick = () => {
    n += 1;
    queue.push(n);
    // 入队，
    // queue.push.call(queue, n); 用 call 语法写
    spanNewNumber.innerText = n;
    // spanQueue.innerText = queue.toString();
    // queue的内容是数组，innerText 只能显示字符串，所以queue.toString;
    spanQueue.innerText = JSON.stringify(queue);
    // JSON.stringify 转换为更像数组的字符串，   
}

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        return;
    }
    const m = queue.shift();
    // const m = queue.shift.call(queue); 用 call 语法
    divScreen.innerText = `请 ${m} 号就餐`
    spanQueue.innerText = JSON.stringify(queue);
}
 
 
