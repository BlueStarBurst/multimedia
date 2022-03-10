import React, { useRef } from "react"
import CustomCard from "./card"
import im1 from "../assets/drawings/1.png"
import cant from "../assets/img/canterbury.jpg"
import anglo from "../assets/img/anglo.jpg"

import Header from "./header"
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap"

export default function Home(props) {

    const focImg = useRef(null)
    const focImageSrc = useRef(null)

    function handleClick(e, fix = false) {
        console.log(fix)
        e.preventDefault();
        e.stopPropagation();
        if (fix && e?.target?.id != "foc") {
            focImg.current.style.display = "none"
            return
        }
        else {
            console.log(e)
            const lol = e.target.src;
            focImageSrc.current.src = lol;
            focImg.current.style.display = "flex"
        }

    }

    return (<>
        <Header />
        <div className="page" onClick={(e) => { handleClick(e, true) }}>
            <div className="focusedImage" ref={focImg}>
                <img id="foc" ref={focImageSrc} ></img>
            </div>

            <CustomCard src={im1}>
                <h3>The Norman Invasion</h3>
                <p>In 1066 <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={(
                        <Tooltip id="button-tooltip" {...props}>
                            The Duke of Normandy, a country that bordered France and therefore gained many French cultural ideas.
                        </Tooltip>
                    )}
                >
                    <span style={{ color: "red" }}>{"William the Conqueror"}</span>
                </OverlayTrigger> Invaded Anglo-Saxon England, establishing a radical new way of life for the English society. This completely changed the culture and ideology of this land going so far as to change the language from Old English to French.</p>
            </CustomCard>

            <CustomCard dir={"row"}>
                <img onClick={handleClick} className="cardImg" src={anglo} style={{ width: "50%" }}></img>
                <p className="side">The Anglo-Saxon depiction of the British Isles. Anglo-Saxon Mappa Mundi, 1025-1050</p>
            </CustomCard>

            <CustomCard src={im1}>
                <h3>Norman Influence</h3>
                <p>The Normans influenced England in many ways. Not only were Anglo-Saxon nobles and religious officers replaced by Normans, many of them were forced to undergo an exodus in order to preserve their traditions. This ultimately was the most vital step in the evolution of the English language during a period known as
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(
                            <Tooltip id="button-tooltip" {...props}>
                                A period spanning approximately 300 years where Old English was undergoing gradual changes until it eventually reached Modern English.
                            </Tooltip>
                        )}
                    >
                        <span style={{ color: "orange" }}>{" \"Middle English\""}</span>
                    </OverlayTrigger>(Crystal)</p>

            </CustomCard>

            <CustomCard dir={"row"}>
                <img onClick={handleClick} className="cardImg" src={cant} style={{ width: "50%" }}></img>
                <p className="side">This work is the <i>Canterbury Tales</i> by Geoffrey Chaucer. It was a famous works following the creation of Modern English and this along with his other works lead to the revival of the English language (Crystal).</p>
            </CustomCard>

            <CustomCard src={im1}>
                <h3>Revival of English</h3>
                <p>
                    Geoffrey Chaucer inspired a movement of English literature and inevitably cemented the foundation of this settling English language. This new language was essentially an amalgamation of languages, slang, and even the whims of artists creating a drastically different look and sound than the previous Old English language. 
                </p>
            </CustomCard>

        </div>
        <p style={{ color: "white", backgroundColor: "black", marginBottom: "0", width: "100vw" }}></p>
    </>)
}