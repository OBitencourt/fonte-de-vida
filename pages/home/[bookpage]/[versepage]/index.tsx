import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

import TemplateDash from "@/src/templates/Dash"
import { Typography } from "@mui/material"

const Chapter = () => {

    const router = useRouter()

    const { id, bibleId, reference, number } = router.query

    const [verses, setVerses] = useState([])


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

    return (

        <>
            <TemplateDash>
                <Typography
                    fontSize={30}
                    sx={{
                        
                        fontFamily: 'Playfair Display',
                        mb: 3
                    }}
                >
                    {reference} - Cap {number}
                </Typography>

                <div>
                    {verses.map((verse, index) => (
                        <p key={index} style={{ marginBottom: '-4px'}}>
                        <span style={{ fontWeight: "bold", marginRight: "12px" }}>
                            {verse.number}
                        </span>
                        <span style={{ fontFamily: 'Judson', fontSize: '20px'}}>

                            {verse.text}
                        </span>
                        </p>
                    ))}
                </div>
            </TemplateDash>
        </>
    )
}


export default Chapter