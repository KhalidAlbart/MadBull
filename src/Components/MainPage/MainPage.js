import GreetingBlock from './GreetingBlock/GreetingBlock';
import Advantages from './Advantages/Advantages';
import * as Styled from './MainPage.style';

export default function MainPage(props) {
    return(
        <Styled.MainPage>
            <GreetingBlock />
            <Advantages />
        </Styled.MainPage>
    )
}