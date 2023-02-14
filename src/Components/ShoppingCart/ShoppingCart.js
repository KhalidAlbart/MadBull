import React from "react"
import {HiX} from "react-icons/hi"
import { Limits } from "../constants"
import {useSelector, useDispatch} from "react-redux"
import { updateCartAction } from "../../Actions/ShoppingCard"
import {NumberSpinner} from "../Products/NumberSpinner/NumberSpinner"
import { Title, Section, Container, EmptyCart, CBox, PTitle, PInfo, Total, Info } from "./ShoppingCart.style"

export default function ShoppingCart(props) {
    const dispatch = useDispatch()
    const Cart = useSelector(state => state.shoppingCart)

    const handleClick = (id) => {
        let object = Cart.filter(item => item.id === id)[0]
        object.value = 0
        dispatch(updateCartAction(object))
    }

    return (
        <Section>
            <Container column gap="2.5rem" maxWidth={Limits.containerMaxWidth + "px"} background="inherit">
                <Title>Корзина</Title>
                {
                    Cart.length < 1
                        ? <EmptyCart>Ваша корзина пока ещё пустая, пожалуйста выберите товары из магазина.</EmptyCart>
                        : <Container column gap="2.5rem" background="inherit">
                                {
                                    Cart.map(item => 
                                        <CBox key={('Cart' + item.id)}>
                                            <img src={item.image} alt="product"/>
                                            <HiX id="delete" onClick={() => handleClick(item.id)}/>
                                            <Container column gap="2.5rem" justifyContent="center">
                                                <PTitle>{item.title}</PTitle>
                                                <PInfo>Вес: <em>{item.weight}</em></PInfo>
                                                <PInfo>Цена: <em>{item.price}</em></PInfo>
                                                {<NumberSpinner data={item}/>}
                                            </Container>
                                        </CBox>
                                    )
                                }
                                <Container column gap="2.5rem" background="inherit">
                                    <Total>Итого:</Total>
                                    <Info>Общий вес: <em>{ getTotalWeight(Cart) / 1000 } кг.</em></Info>
                                    <Info>Цена: <em>{ getTotalPrice(Cart) } р.</em></Info>
                                </Container> 
                            </Container>
                }
            </Container>
        </Section>
    )
}

function getTotalWeight(data) {
    let weights = data.map(item => (matchNumber(item.weight) * item.value))
    console.log(weights)
    return weights.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function getTotalPrice(data) {
    let priceList = data.map(item => (matchNumber(item.price) * item.value))
    return priceList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function matchNumber(value) {
    return Number(value.match(/(\d+)/g, '')[0])
}