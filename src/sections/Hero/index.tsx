import { Container, Typography } from "@mui/material"
import { HeroSection, HorizontalBox, StyledButton, VerticalBox } from "./style"

const Hero = () => {
    return (
        <>
            <HeroSection>
                <Container
                    maxWidth='lg'
                >
                    <HorizontalBox>
                        <Typography
                            align="left"
                            fontSize={20}
                            sx={{
                                fontFamily: "Playfair Display"
                            }}
                        >
                           Nossa missão é tornar a Bíblia acessível e prática para o seu dia a dia. Encontre versículos, planos de leitura, e reflexões para guiá-lo(a) em cada passo. Que cada visita aqui seja uma oportunidade de renovação espiritual e paz.
                        </Typography>
                        
                        
                    </HorizontalBox>

                    <VerticalBox>
                        <Typography
                        align="left"
                        fontSize={30}
                            sx={{
                                fontFamily: "Playfair Display"
                            }}
                        >
                            “A tua palavra é lâmpada para os meus pés e luz para o meu caminho.” - <strong>Salmos 119:105</strong>
                        </Typography>
                        <StyledButton>
                            Leia Agora!
                        </StyledButton>
                    </VerticalBox>
                </Container>

            </HeroSection>
        </>
    )
}

export default Hero