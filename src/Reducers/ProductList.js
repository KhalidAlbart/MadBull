import Pic from '../Assets/Bulls.png'

const desc = 'Вопрос такой - есть пять элементов, необходимо сначала выводить 3 элемента, затем переносом в следующей строке 2. Как это можно реализовать на flexbox?'

const productList = [
    {id: 1, image: Pic, title: 'Мясные чипсы MaBull1', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 2, image: Pic, title: 'Мясные чипсы MaBull2', weight: '250 г.', price: '501 p.', desc: desc},
    {id: 3, image: Pic, title: 'Мясные чипсы MaBull3', weight: '250 г.', price: '502 p.', desc: desc},
    {id: 4, image: Pic, title: 'Мясные чипсы MaBull4', weight: '250 г.', price: '503 p.', desc: desc},
    {id: 5, image: Pic, title: 'Мясные чипсы MaBull5', weight: '250 г.', price: '504 p.', desc: desc},
    {id: 6, image: Pic, title: 'Мясные чипсы MaBull6', weight: '250 г.', price: '505 p.', desc: desc},
    {id: 7, image: Pic, title: 'Мясные чипсы MaBull7', weight: '250 г.', price: '506 p.', desc: desc},
    {id: 8, image: Pic, title: 'Мясные чипсы MaBull8', weight: '250 г.', price: '507 p.', desc: desc},
    {id: 9, image: Pic, title: 'Мясные чипсы MaBull9', weight: '250 г.', price: '508 p.', desc: desc},
    {id: 10, image: Pic, title: 'Мясные чипсы MaBull10', weight: '250 г.', price: '509 p.', desc: desc},
    {id: 11, image: Pic, title: 'Мясные чипсы MaBull11', weight: '250 г.', price: '510 p.', desc: desc},
    {id: 12, image: Pic, title: 'Мясные чипсы MaBull12', weight: '250 г.', price: '511 p.', desc: desc}
]

const sortedArray = (array, key) => {
    const newArray = [...array].sort((a, b) => new Intl.Collator().compare(String(b[key]).toLowerCase(), String(a[key]).toLowerCase()))
    console.log(newArray[key])
    return newArray
}

const productListReducer = (state = productList, action) => {
    switch(action.type) {
        case 'COST-UP':
            state = sortedArray(productList, 4)
            return state
        case 'COST-DOWN':
            state = sortedArray(productList, 4).reverse()
            return state
        case 'NAME-UP':
            state = sortedArray(productList, 2)
            return state
        case 'NAME-DOWN':
            state = sortedArray(productList, 2).reverse()
            return state
        default:
            return state
    }
}

export default productListReducer