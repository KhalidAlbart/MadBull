import * as S from "./ProductCard.style"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { HiPlusSm, HiMinusSm, HiShoppingCart } from "react-icons/hi"


export default function ProductCard(props) {
    const viewCase = useSelector(state => state.view)
    
    return (
        <S.PBox view={viewCase === "Grid" ? true : false}>
            <img src={props.image} alt="ProductPoster.png" />
            <S.PContent>
                <S.PDesc>
                    <S.PTitle>{props.title}</S.PTitle>
                    <S.PInfo>Вес: <em>{props.weight}</em></S.PInfo>
                    <S.PInfo>Цена: <em>{props.price}</em></S.PInfo>
                    <S.PInfo noTransform hide={viewCase === "Grid" ? true : false}>{props.desc}</S.PInfo>
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

    const handleChange = (event) => event.target.value >= 0 && setCount(event.target.value)
    const dicrement = () => count > 0 ? setCount(count - 1) : false
    const implement = () => setCount(count + 1)

    return (
        <S.SpinnerBox maxWidth="115px" onSubmit={(event) => event.preventDefault()}>
            <S.Operator onClick={dicrement} size={S.Font.size.large} fill={S.Colors.white}><HiMinusSm /></S.Operator>
            <S.Input center maxWidth="60px" onChange={handleChange} value={count} />
            <S.Operator onClick={implement} size={S.Font.size.large} fill={S.Colors.white}><HiPlusSm /></S.Operator>
        </S.SpinnerBox>
    )
}