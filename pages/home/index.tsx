import {Container, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { StylesConfig, GroupBase } from 'react-select';
import { useRouter } from 'next/router';

import TemplateDash from '@/src/templates/Dash'
import { Book, BooksWrapper, Wrapper } from './style';

type OptionType = {
    value: string;
    label: string;
};

type Bible = {
    id: string;  
    name: string;  // O nome do livro também é uma string
};

type Book = {
    bibleId: string,
    id: string;  
    name: string;  // O nome do livro também é uma string
};

const oldTestamentBooks = [
    'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 
    'JOS', 'JDG', 'RUT', '1SA', '2SA',  
    '1KI', '2KI', '1CH', '2CH', 'EZR', 
    'NEH', 'EST', 'JOB', 'PSA', 'PRO', 
    'ECC', 'SNG', 'ISA', 'JER', 'LAM',  
    'EZK', 'DAN', 'HOS', 'JOL', 'AMO',  
    'OBA', 'JON', 'MIC', 'NAM', 'HAB',   
    'ZEP', 'HAG', 'ZEC', 'MAL'            
];


const newTestamentBooks = [
    'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', 
    '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
];

const Home = () => {
    const router = useRouter()
    
    const [options, setOptions] = useState([
        
    ]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [oldTestament, setOldTestament] = useState([]);
    const [newTestament, setNewTestament] = useState([]);
    const [additionalBooks, setAdditionalBooks] = useState([]); // for additional uncanon books


    useEffect(() => {
        axios.get('https://api.scripture.api.bible/v1/bibles', {
            headers: {
                'api-key': '11d3d3f880c4f4606e9e0d4cd6e63556'
            }
        })
        .then((response) => {
            const formattedOptions = response.data.data.map((bible: Bible) => ({
                value: bible.id,
                label: bible.name,
            }));
            setOptions(formattedOptions);
            
        })
        .catch((error) => {
            console.error(error);
            
        });
    }, []);

    useEffect(() => {
        if (selectedOption) {
            axios.get(`https://api.scripture.api.bible/v1/bibles/${selectedOption.value}/books`, {
                headers: {
                    'api-key': '11d3d3f880c4f4606e9e0d4cd6e63556'
                }
            })
            .then(response => {
                const books = response.data.data;
                
                const formattedBooks = books.map((book: Book) => ({
                    bibleId: book.bibleId, // Bible ID
                    value: book.id, // Book ID
                    label: book.name // Book name
                }));
                
                console.log(formattedBooks)
                

                const oldBooks = formattedBooks.filter((book) => oldTestamentBooks.includes(book.value));

                const newBooks = formattedBooks.filter(book => newTestamentBooks.includes(book.value));

                const additional = formattedBooks.filter(book => !oldTestamentBooks.includes(book.value) && !newTestamentBooks.includes(book.value));

                // Atualizando o estado com os livros categorizados
                setOldTestament(oldBooks);
                setNewTestament(newBooks);
                setAdditionalBooks(additional);

            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [selectedOption]);
    
    const handleChange = (selected) => {
        setSelectedOption(selected);
    };
    
    const handleBookClick = book => {
        router.push({
            pathname: `/home/${book.label}`,
            query: {
                id: book.value,
                bibleId: book.bibleId,
                label: book.label
            }
        })
    }

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
                                fontFamily: 'Inria Sans',
                                mb: 2
                            }}
                        >   
                            Antigo Testamento
                        </Typography>
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

                            {
                                oldTestament 
                                
                                ? (

                                    oldTestament.map(book => (
                                        
                                        <Book 
                                            key={book.id}
                                            onClick={() => handleBookClick(book)}
                                        >
                                            {book.label}
                                        </Book>
                                    ))
                                )
                                
                                : null
                            }

                        </div>
                    </BooksWrapper>
                    <BooksWrapper>
                    <Typography
                            align='center'
                            sx={{
                                fontFamily: 'Inria Sans',
                                mb: 2
                            }}
                        >   
                            Novo Testamento
                        </Typography>
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

                            {
                                newTestament 
                                
                                ? (

                                    newTestament.map(book => (
                                        <Book 
                                            onClick={() => handleBookClick(book)}
                                            key={book.id}
                                        >
                                            {book.label}
                                        </Book>
                                    ))
                                )
                                
                                : null
                            }

                        </div>
                    </BooksWrapper>
                </Wrapper>
            </TemplateDash>
        </>
    )
}


export default Home