import Image from "next/image";
import { ButtonsWrapper, MenuButton, StyledMenuBar, TextDiv, User, ToggleButton } from "./style";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface MenuBarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuBar = ({ isOpen, toggleMenu }: MenuBarProps) => {
    
    const router = useRouter();

    const handleRoute = (route: string) => {
        router.push(route);
    };
 
    return (

        
        <StyledMenuBar isOpen={isOpen}>
            
            <ToggleButton isOpen={isOpen} onClick={toggleMenu}>
                {isOpen ? <ArrowLeftIcon /> : <MenuIcon />}
            </ToggleButton>
            

            {isOpen ? (
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Playfair Display",
                        textShadow: "0px 0px 20px gray",
                        position: 'absolute',
                        width: '120px',
                        left: '25%'
                    }}
                    align="center"
                    color="#FFF1D9"
                    fontSize={30}
                    
                >
                    Fonte de Vida
                </Typography>
                )

                : null
            
            }
           
            

            <ButtonsWrapper>
                <MenuButton
                    onClick={() => handleRoute("/home")}
                    $isActive={router.pathname === "/home"}
                    $isOpen={isOpen}
                >
                    <Image
                        src={
                            router.pathname === "/home"
                                ? "/images/home-brown.png"
                                : "/images/home-white.png"
                        }
                        width={25}
                        height={25}
                        alt="home"
                    />
                    {isOpen && <TextDiv>Home</TextDiv>}
                </MenuButton>
                <MenuButton
                    onClick={() => handleRoute("/study")}
                    $isActive={router.pathname === "/study"}
                    $isOpen={isOpen}
                >
                    <Image
                        src="/images/study-white.png"
                        width={25}
                        height={25}
                        alt="study"
                    />
                    {isOpen && <TextDiv>Estudos</TextDiv>}
                </MenuButton>
                <MenuButton
                    onClick={() => handleRoute("/dayverse")}
                    $isActive={router.pathname === "/dayverse"}
                    $isOpen={isOpen}
                >
                    <Image
                        src="/images/day-white.png"
                        width={25}
                        height={25}
                        alt="dayverse"
                    />
                    {isOpen && <TextDiv>Versículo do Dia</TextDiv>}
                </MenuButton>
                <MenuButton
                    onClick={() => handleRoute("/plans")}
                    $isActive={router.pathname === "/plans"}
                    $isOpen={isOpen}
                >
                    <Image
                        src="/images/plans-white.png"
                        width={25}
                        height={25}
                        alt="plans"
                    />
                    {isOpen && <TextDiv>Planos de Leitura</TextDiv>}
                </MenuButton>
            </ButtonsWrapper>
            
            
            
            
            {isOpen ? (
                <User isOpen={isOpen}>
                    <Avatar
                        sx={{
                            bgcolor: "white",
                            color: "#765D54",
                            width: 37,
                            height: 37,
                            marginRight: 1,
                            fontSize: '15px'
                        }}
                    >
                        N
                    </Avatar>
                    <Typography
                        color="white"
                        sx={{
                            fontFamily: "Inria Sans",
                        }}
                    >
                        user@hotmail.com
                    </Typography>
                </User>
            )

            : (
                <Avatar
                    sx={{
                        bgcolor: "white",
                        color: "#765D54",
                        width: 40,
                        height: 40,
                        margin: '0 auto'
                    }}
                >
                    N
                </Avatar>
            )
        
            }
        </StyledMenuBar>
    );
};

export default MenuBar;
