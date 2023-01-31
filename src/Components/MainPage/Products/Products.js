import * as S from "./Products.style";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SearchField from "./SearchField/SearchField";
import SortField from "./SortField/SortField";
import ViewCase from './ViewCase/ViewCase';
import Pagination from './Pagination/Pagination';
import { useSelector } from "react-redux";

export default function Products(props) {
    const maxCapacity = 6;
    const currentPage = useSelector(store => store.pageNumber);
    const products = useSelector(store => store.products);

    const productList = () => {
        const start = currentPage * maxCapacity - maxCapacity;
        const end = start + maxCapacity;
        return products.slice(start, end);
    }

    return (
        <S.Section>
            <S.Container column background={S.Colors.white} gap='2.5rem' maxWidth='925px'>
                <S.Container justifyContent='space-between' alignItems='stretch' background={S.Colors.white}>
                    <S.Container alignItems='stretch' background={S.Colors.white} gap='2.5rem' maxWidth='max-content'>
                        <SearchField />
                        <SortField />
                    </S.Container>
                    <S.Container background={S.Colors.white} gap='1rem' maxWidth='fit-content'>
                        <ViewCase />
                    </S.Container>
                </S.Container>
                <S.Container background={S.Colors.white} gap='5rem' Wrap justifyContent='center' alignItems='stretch'>
                    {productList().map(product => <ProductCard key={'ProductCard' + product.id} image={product.image} title={product.title} weight={product.weight} price={product.price} desc={product.desc}/>)}
                </S.Container>
                <S.Container padding='1rem' background='transparent' justifyContent='center' alignItems='center' gap='2rem'>
                    <Pagination maxCapacity={maxCapacity} />
                </S.Container>
            </S.Container>
        </S.Section>
    );
}