import * as S from "./Products.style";
import React from "react";
import { Section } from "../Advantages/Advantages.style";
import ProductCard from "./ProductCard/ProductCard";
import SearchField from "./SearchField/SearchField";
import SortField from "./SortField/SortField";
import ViewCase from './ViewCase/ViewCase';
import Pagination from './Pagination/Pagination';
import { Container } from "../../Container/Container.style";
import { useSelector } from "react-redux";

export default function Products(props) {
    const maxCapacity = 6;
    const currentPage = useSelector(store => store.pageNumber);
    const viewCase = useSelector(store => store.view);
    const products = useSelector(store => store.products);


    const productList = () => {
        const start = currentPage * maxCapacity - maxCapacity;
        const end = start + maxCapacity;
        return products.slice(start, end);
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
                        <ViewCase />
                    </Container>
                </Container>
                <Container background={S.Colors.white} gap='5rem' Wrap justifyContent='center' alignItems='stretch'>
                    {productList().map(product => <ProductCard key={'ProductCard' + product.id} image={product.image} title={product.title} weight={product.weight} price={product.price} desc={product.desc} view={viewCase}/>)}
                </Container>
                <Container padding='1rem' background='transparent' justifyContent='center' alignItems='center' gap='2rem'>
                    <Pagination maxCapacity={maxCapacity} />
                </Container>
            </Container>
        </Section>
    );
}