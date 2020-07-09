const createList = value => {
    return createNode(value)
}
// 只创造一个结点的list列表
const appendList = (list,value) => {
    const node = createNode(value)
    let x = list;
    while (x.next) {
        x = x.next;
    }
    // x.next === null // x 是最后一个节点

    x.next = node;
    return node;
}

const removeFromList = (list, node) => {
    // debugger； 检验代码控制台运行
    let x = list;
    let p = null;
    while (x !== node) {
        p = x;
        x = x.next;
    }
    // console.log(p===null || x 的上一个节点)
    // console.log(x===node || x === null)
    p.next = x.next
//     if (list === node) {
//         //如果删除的是第一个节点
//         list = node.next; 
//     }else{
//         // 如果删除的是第二个节点
//         // 第一个节点.next = 第二个节点.next
//         if(list.next === node){
//             list.node = node.next
//         }else{
//             // 如果删除的是第三个节点
//             // 第二个节点.next = 第三个节点.next
//             if(list.next.next === node){
//                 (list.node).next = node.next
//             }
//         }
//     }
};

const createNode = value => {
    return {
        data: value,
        next: null
    }
}

const traveList = (list, fn) => {
    let x = list;
    while(x !== null){
        fn(x);
        x = x.next;
    }
}
// 对每一个list 进行函数操作

const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
removeFromList(list, node3)
// 删掉第三个节点 
// removeFromList(list, node3)  和
// travelList(list, node => {
//     console.log(node.data);
// });   不共存
console.log('list')
console.log(list)

traveList(list, node => {
    console.log(node.data)
})



