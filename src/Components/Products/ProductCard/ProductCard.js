import * as S from "./ProductCard.style"
import React from "react"
import { useSelector } from "react-redux"
import { NumberSpinner } from "../NumberSpinner/NumberSpinner"
import { HiShoppingCart } from "react-icons/hi"


export default function ProductCard(props) {
    const viewCase = useSelector(state => state.view)

    const handleSubmit = (event) => {
        event.preventDefault()
        // Adding a shoppindg card from our reducer to client's local storage as a Shopping Card item
    }

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
                <S.PWrap onSubmit={handleSubmit}>
                    <NumberSpinner data={props} />
                    <S.AddToShoppingList size={S.Font.size.extralarge}><HiShoppingCart /></S.AddToShoppingList>
                </S.PWrap>
            </S.PContent>
        </S.PBox>
    )
}