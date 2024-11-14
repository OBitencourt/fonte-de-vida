import { Container, Typography } from "@mui/material"
import { HeroSection, StyledButton } from "./style"

import { useRouter } from "next/router"

const Hero = () => {
    const router  = useRouter()

    const handleRoute = (route: string) => {
        router.push(route)
    }

    return (
        <>
            <HeroSection>
                <Container
                    maxWidth='sm'
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography 
                        variant="h2"
                        sx={{
                            fontFamily: 'Playfair Display',
                            textShadow: '0px 0px 20px gray'
                        }}
                        align="center"
                        color="#FFF1D9"
                        fontSize={90}
                        gutterBottom
                    >
                        Fonte de Vida
                    </Typography>
                    <StyledButton
                        onClick={() => handleRoute('/home')}
                    >
                        Leia agora!
                    </StyledButton>
                </Container>

            </HeroSection>
        </>
    )
}

export default Hero