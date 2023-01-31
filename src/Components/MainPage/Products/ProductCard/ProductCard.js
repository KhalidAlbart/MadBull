import * as S from './ProductCard.style'
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { HiPlusSm, HiMinusSm, HiShoppingCart } from "react-icons/hi"


export default function ProductCard(props) {
    const viewCase = useSelector(state => state.view)
    sessionStorage.setItem('view', JSON.stringify(viewCase))

    return (
        <S.PBox view={viewCase}>
            <img src={props.image} alt='ProductPoster.png' />
            <S.PContent>
                <S.PDesc>
                    <S.PTitle>{props.title}</S.PTitle>
                    <S.PInfo>Вес: <em>{props.weight}</em></S.PInfo>
                    <S.PInfo>Цена: <em>{props.price}</em></S.PInfo>
                    <S.PInfo noTransform hide={viewCase}>{props.desc}</S.PInfo>
                </S.PDesc>
                <S.PWrap>
                    <NumberSpinner />
                    <S.AddToShoppingList size={S.Font.size.extralarge}><HiShoppingCart /></S.AddToShoppingList>
                </S.PWrap>
            </S.PContent>
        </S.PBox>
    )
}

export function NumberSpinner(props) {
    const [count, setCount] = useState(0)

    const userChange = (event) => event.target.value >= 0 && setCount(event.target.value)
    const dicrement = () => count > 0 ? setCount(count - 1) : count === 1 ? setCount(0) : false
    const implement = () => setCount(count + 1)

    return (
        <S.SpinnerBox maxWidth='115px'>
            <S.Operator onClick={dicrement} size={S.Font.size.large} fill={S.Colors.white}><HiMinusSm /></S.Operator>
            <S.Input center maxWidth='60px' onChange={userChange} value={count} />
            <S.Operator onClick={implement} size={S.Font.size.large} fill={S.Colors.white}><HiPlusSm /></S.Operator>
        </S.SpinnerBox>
    )
}