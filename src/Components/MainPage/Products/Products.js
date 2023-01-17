import React, { useState } from "react";
import { Container } from "../../Container/Container.style";
import { Section } from "../Advantages/Advantages.style";
import { Colors } from "../../constants";
import * as S from "./Products.style";

export default function Products(props) {
    return (
        <Section>
            <Container column background={Colors.white}>
                <Container>
                    <input type='search ' placeholder="Name"/>
                </Container>
                <Container>
                    <Container>
                        <img src='' alt=''/>
                        <Container column>
                            <h2>Title</h2>
                            <p>Key: <em>value 24</em></p>
                            <p>Key: <em>value 24</em></p>
                        </Container>
                        <Container>
                            <NumberSpinner min='0'/>
                            <button>Bay</button>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Section>
    );
}

function NumberSpinner(props) {
    const [count, setCount] = useState(0);

    const userChange = (event) => event.target.value > props.min && setCount(event.target.value);
    const dicrement = () => props.min >= 0 && setCount(count - 1);
    const implement = () => setCount(count + 1);

    return (
        <S.Spinner>
            <S.Operation onClick={dicrement}>-</S.Operation>
            <S.Count onChange={userChange} defaultValue={count} />
            <S.Operation onClick={implement}>+</S.Operation>
        </S.Spinner>
    );
}