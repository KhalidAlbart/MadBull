import * as S from "./Products.style";
import React, { useState } from "react";
import { HiViewList, HiViewGrid } from "react-icons/hi";
import { Section } from "../Advantages/Advantages.style";
import ProductCard from "./ProductCard/ProductCard";
import SearchField from "./SearchField/SearchField";
import SortField from "./SortField/SortField";
import { Container } from "../../Container/Container.style";
import Pic from '../../../Assets/Bulls.png';

const desc = 'Вопрос такой - есть пять элементов, необходимо сначала выводить 3 элемента, затем переносом в следующей строке 2. Как это можно реализовать на flexbox?'
const store = [
    {id: 1, image: Pic, title: 'Мясные чипсы MaBull1', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 2, image: Pic, title: 'Мясные чипсы MaBull2', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 3, image: Pic, title: 'Мясные чипсы MaBull3', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 4, image: Pic, title: 'Мясные чипсы MaBull4', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 5, image: Pic, title: 'Мясные чипсы MaBull5', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 6, image: Pic, title: 'Мясные чипсы MaBull6', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 7, image: Pic, title: 'Мясные чипсы MaBull7', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 8, image: Pic, title: 'Мясные чипсы MaBull8', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 9, image: Pic, title: 'Мясные чипсы MaBull9', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 10, image: Pic, title: 'Мясные чипсы MaBull10', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 11, image: Pic, title: 'Мясные чипсы MaBull11', weight: '250 г.', price: '500 p.', desc: desc},
    {id: 12, image: Pic, title: 'Мясные чипсы MaBull12', weight: '250 г.', price: '500 p.', desc: desc}
];

export default function Products(props) {
    const maxCopacity = 6;
    //const pageCount = Math.ceil(store.length / maxCopacity);
    const [isViewLGrid, setChangeView] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    const productsList = () => {
        const start = pageNumber * maxCopacity;
        const end = start + maxCopacity;
        let list = store.slice(start, end);
        return list;
    }

    return (
        <Section>
            <Container column background={S.Colors.white} gap='2.5rem' maxWidth='925px'>
                <Container justifyContent='space-between' alignItems='stretch' background={S.Colors.white}>
                    <Container alignItems='stretch' background={S.Colors.white} gap='2.5rem' maxWidth='max-content'>
                        <SearchField />
                        <SortField />
                    </Container>
                    <Container background={S.Colors.white} gap='1rem' maxWidth='fit-content'>
                        <S.Button onClick={() => setChangeView(true)} name='ViewGrid' size={S.Font.size.extralarge}><HiViewGrid /></S.Button>
                        <S.Button onClick={() => setChangeView(false)} name='ViewList' size={S.Font.size.extralarge}><HiViewList /></S.Button>
                    </Container>
                </Container>
                <Container background={S.Colors.white} gap='5rem' Wrap justifyContent='center'>
                    {productsList().map(product => <ProductCard key={'ProductCard' + product.id} image={product.image} title={product.title} weight={product.weight} price={product.price} desc={product.desc} view={isViewLGrid}/>)}
                </Container>
            </Container>
        </Section>
    );
}