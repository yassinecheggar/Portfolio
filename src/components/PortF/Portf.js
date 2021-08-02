

import {Container,
     SubTitle,
     SectionTitle,
    } from '../../globalStyles'
import {ContainerWrapper,
     CardContainer,
    Card,
    CardImage,
    GlobalContainer,
    CardTitle,SkilSubTitle} from './PortfElements'
function Portf() {
    return (
        <>
            <ContainerWrapper>
                <GlobalContainer>
                    <SectionTitle>PORTFOLIO</SectionTitle>
                    <SubTitle>Some of my latest work.</SubTitle>

                    <CardContainer>

                        <Card>
                            <CardImage background="/images/project1.png"/>
                            <CardTitle>E-commerce</CardTitle>
                            <SkilSubTitle>Website</SkilSubTitle>
                        </Card>

                        <Card>
                        <CardImage background="/images/project2.png"/>
                        </Card>

                        <Card>
                        <CardImage background="/images/project1.png"/>
                            <CardTitle>E-commerce</CardTitle>
                            <SkilSubTitle>Website</SkilSubTitle>
                        </Card>
                        <Card>
                        <CardImage background="/images/project1.png"/>
                            <CardTitle>E-commerce</CardTitle>
                            <SkilSubTitle>Website</SkilSubTitle>
                        </Card>

                        <Card>
                        <CardImage background="/images/project1.png"/>
                            <CardTitle>E-commerce</CardTitle>
                            <SkilSubTitle>Website</SkilSubTitle>
                        </Card>

                        <Card>
                        <CardImage background="/images/project1.png"/>
                            <CardTitle>E-commerce</CardTitle>
                            <SkilSubTitle>Website</SkilSubTitle>
                        </Card>

                      

                    </CardContainer>
                </GlobalContainer>
            </ContainerWrapper>
        </>
    )
}

export default Portf
