import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

import TemplateDash from "@/src/templates/Dash"
import { Typography } from "@mui/material"
import { Back, NextButton, PrevButton } from "./style"
import Image from "next/image"

const Chapter = () => {

    const router = useRouter()

    const { id, bibleId, reference, number } = router.query

    const [verses, setVerses] = useState([])
    const [moreVerses, setMoreVerses] = useState(true)


    console.log(router.query)

    

    useEffect(() => {


        const fetchVerses = async () => {

            const response = await axios.get(
                `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${id}/verses`,
                {
                    headers: {
                        "api-key": "11d3d3f880c4f4606e9e0d4cd6e63556",
                    },
                }
            );



            const verseIds = response.data.data.map((verse) => verse.id);

            const versePromises = verseIds.map((verseId) =>
                axios.get(
                    `https://api.scripture.api.bible/v1/bibles/${bibleId}/verses/${verseId}`,
                    {
                        headers: {
                            "api-key": "11d3d3f880c4f4606e9e0d4cd6e63556",
                        },
                    }
                )
            );

            const verseResponses = await Promise.all(versePromises);

            const verseContents = verseResponses.map((res) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(res.data.data.content, "text/html");
      
                // Extrair o número do versículo
                const verseNumber = doc.querySelector(".v")?.textContent;
      
                // Extrair o texto do versículo
                const verseText = doc.body.textContent?.replace(
                  /^\d+\s*/,
                  ""
                );

                return {
                    number: verseNumber,
                    text: verseText,
                  };
                });

            setVerses(verseContents);
            
        }

        if (id && bibleId) {
            fetchVerses();
        }
    }, [id, bibleId])


    console.log(verses)

    const handleNavigation = async (direction: "prev" | "next") => {
        try {
            const response = await axios.get(
                `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${id}`,
                {
                    headers: {
                        "api-key": "11d3d3f880c4f4606e9e0d4cd6e63556",
                    },
                }
            );

            const newChapterId =
                direction === "prev"
                    ? response.data.data.previous?.id
                    : response.data.data.next?.id;

            if (newChapterId) {
                const newChapterNumber =
                    direction === "prev"
                        ? Number(number) - 1
                        : Number(number) + 1;

                router.push({
                    pathname: `/home/${newChapterId}/${reference}`,
                    query: {
                        id: newChapterId,
                        bibleId,
                        reference,
                        number: newChapterNumber,
                    },
                });

                setMoreVerses(true)
            } else {
                setMoreVerses(false)
                alert("Não há mais capítulos.");

            }
        } catch (error) {
            console.error("Erro ao navegar para o capítulo:", error);
        }
    };

    return (

        <>
            <TemplateDash>
                <Back onClick={() => history.back()}>
                    <Image 
                        src='/images/arrow-return.svg'
                        alt="return-arrow"
                        width={15}
                        height={15}
                    />
                </Back>
                <Typography
                    fontSize={35}
                    fontWeight={500}
                    sx={{
                        
                        fontFamily: 'Playfair Display',
                        mb: 3,
                    }}
                >
                    {reference} - Cap {number}
                </Typography>

                <div style={{marginBottom: '24px',}}>
                    {verses.map((verse, index) => (
                        <p key={index} style={{ marginBottom: '-4px'}}>
                        <span style={{ fontWeight: "bold", marginRight: "12px", fontFamily: 'Judson'}}>
                            {verse.number}
                        </span>
                        <span style={{ fontFamily: 'Judson', fontSize: '24px'}}>

                            {verse.text}
                        </span>
                        </p>
                    ))}
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <PrevButton $moreVerses={router.query.number === '0' || router.query.number === 'intro' ? false : true} onClick={() => handleNavigation("prev")}>
                        Anterior
                    </PrevButton>
                    <NextButton onClick={() => handleNavigation("next")}>
                        Próximo
                    </NextButton>
                </div>
            </TemplateDash>
        </>
    )
}


export default Chapter