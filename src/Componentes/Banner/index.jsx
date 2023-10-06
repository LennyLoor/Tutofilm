
import styled from "styled-components";
import { colorOverlay, colorPrimario } from "../UI/variables";
import { img_Banner, img_videoBanner } from "../UI/images";
import { ImageBanner } from "../UI";

const SectionPrincipal = styled.section` 
    background-image: url(${img_Banner});
    height: calc(100vh - 66px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;  
`
const OverlaySection = styled.div` 
    background-color: ${colorOverlay}; 
    position: absolute;
    width: 100%;
    height: 100%; 
    mix-blend-mode: multiply;
`
const Content = styled.div`  
    position: absolute;    
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 5rem;
    padding: 3rem;
`
const Box = styled.div`  
    width: auto;  
    color: white;    
    display: flex;
    flex-direction: column;
`
const Link = styled.a`  
    width: max-content;
    font-size: 2rem;
    margin-bottom: 2rem;
    background-color: ${colorPrimario};
    padding: .5rem 1.5rem; 
    border-radius: 0 1rem;
`
const Title = styled.b`  
    font-size: 1.5rem;
    margin-bottom: 1rem;
`
const Info = styled.p`  
    line-height: 1.5rem;
    font-weight: 200;
    text-align: justify;
`


const Banner = () => {
    return (
        <SectionPrincipal>
            <OverlaySection />
            <Content>
                <Box>
                    <Link>Diseño Web</Link>
                    <Title>Tutoriales de tecnología</Title>
                    <Info>
                        Figma tutorial para principiantes | 👋Aprende Diseño Web UI de manera simple a través de Figma.
                    </Info>
                </Box>
                <div>
                    <ImageBanner width={500} src={img_videoBanner} />
                </div>
            </Content>
        </SectionPrincipal>
    )
}
export default Banner