import {Container, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { StylesConfig, GroupBase } from 'react-select';

import TemplateDash from '@/src/templates/Dash'
import { BooksWrapper, Wrapper } from './style';

type OptionType = {
    value: string;
    label: string;
};


const Home = () => {
    
    const [options, setOptions] = useState([
        
    ]);

    useEffect(() => {
        axios.get('https://api.scripture.api.bible/v1/bibles', {
            headers: {
                'api-key': '11d3d3f880c4f4606e9e0d4cd6e63556'
            }
        })
        .then((response) => {
            const formattedOptions = response.data.data.map((bible) => ({
                value: bible.id,
                label: bible.name,
            }));
            setOptions(formattedOptions);

        })
        .catch((error) => {
            console.error(error);
            
            });
    }, []);

    console.log(options)

    const [selectedOption, setSelectedOption] = useState(null);

    // Função para capturar a seleção
    const handleChange = (selected) => {
        setSelectedOption(selected);
    };

    // Estilização customizada do Select
    const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
        control: (base, state) => ({
            ...base,
            background: '#695148',
            borderRadius: '4px',
            borderColor: state.isFocused ? '#765D54' : 'transparent',        
            padding: '2px',
            fontFamily: 'Inria Sans',
            fontSize: '14px',
            
        }),
        placeholder: (base) => ({
            ...base,
            color: 'white',
            
        }),
        singleValue: (base) => ({
            ...base,
            color: 'white',
        }),
        menu: (base) => ({
            ...base,
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 5,
            maxHeight: '150px', // Altura máxima do menu
            overflowY: 'auto',
            pointerEvents: 'auto',
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
            maxHeight: '150px',
            overflowY: 'auto', // Ativa barra de rolagem no menu
        }),
        option: (base, { isFocused, isSelected }) => ({
            ...base,
            background: isSelected
                ? '#765D54'
                : isFocused
                ? '#FFE4C1'
                : 'white',
            color: isSelected ? 'white' : '#2D2923',
            padding: '8px',
            cursor: 'pointer',
            fontFamily: 'Inria Sans',
            fontSize: '14px',
            fontWeight: '300',
            width: '100%'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: 'white', // Cor da seta
            '&:hover': {
                color: 'white', // Cor da seta ao passar o mouse
            },
        }),
        input: (base) => ({
            ...base,
            color: 'white', // Cor do texto digitado no input
        }),
    };

    return (

        <>
            <TemplateDash>
                <Container
                    maxWidth='xs'
                    
                >
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display'
                        }}
                        align='center'
                        fontSize={60}
                        
                        color='#2D2923'
                    >
                        Bíblia
                    </Typography>

                </Container>

                <div style={{width: '20%', marginBottom: '10px'}}>

                    <Select
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                        placeholder="Versão"
                        styles={customStyles}
                        isSearchable                        
                        menuShouldScrollIntoView={false}
                    />
                </div>
                
                <Wrapper>
                
                    <BooksWrapper>
                        <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans'
                            }}
                        >   
                            Old Testament
                        </Typography>
                    </BooksWrapper>
                    <BooksWrapper>
                    <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans'
                            }}
                        >   
                            New Testament
                        </Typography>
                    </BooksWrapper>
                </Wrapper>
            </TemplateDash>
        </>
    )
}


export default Home