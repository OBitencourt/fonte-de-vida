import Image from "next/image";
import { useState } from "react";
import { ButtonsWrapper, MenuButton, StyledMenuBar, TextDiv, User, ToggleButton } from "./style";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleRoute = (route: string) => {
        router.push(route);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
 

    return (

        
        <StyledMenuBar isOpen={isOpen}>
            <ToggleButton onClick={toggleMenu}>
                {isOpen ? <ArrowLeftIcon /> : <MenuIcon />}
            </ToggleButton>
            {isOpen ? (
                <User isOpen={isOpen}>
                    <Avatar
                        sx={{
                            bgcolor: "white",
                            color: "#765D54",
                            width: 37,
                            height: 37,
                            marginRight: 1,
                            
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
                        userficticio@hotmail.com
                    </Typography>
                </User>
            )

            : (
                <Avatar
                    sx={{
                        bgcolor: "white",
                        color: "#765D54",
                        width: 50,
                        height: 50,
                        marginRight: 1,
                    }}
                >
                    N
                </Avatar>
            )
        
            }

            <ButtonsWrapper>
                <MenuButton
                    onClick={() => handleRoute("/home")}
                    $isActive={router.pathname === "/home"}
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

            {isOpen && (
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Playfair Display",
                        textShadow: "0px 0px 20px gray",
                        position: "absolute",
                        bottom: 0,
                        width: "200px",
                    }}
                    align="center"
                    color="#FFF1D9"
                    fontSize={40}
                    gutterBottom
                >
                    Fonte de Vida
                </Typography>
            )}
        </StyledMenuBar>
    );
};

export default MenuBar;
