import React, { useRef } from "react"
import CustomCard from "./card"
import im1 from "../assets/drawings/1.png"
import cant from "../assets/img/canterbury.jpg"
import anglo from "../assets/img/anglo.jpg"

import Header from "./header"
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap"
import Footer from "./footer"

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
        <Header static />
        <div className="page" onClick={(e) => { handleClick(e, true) }}>
            <div className="focusedImage" ref={focImg}>
                <img id="foc" ref={focImageSrc} ></img>
            </div>

            <CustomCard src={im1}>
                <h3>A New Language</h3>
                <p>The beloved Modern English one sees today is the culmination of many different aspects of the people inhabiting England.</p>
            </CustomCard>

            <CustomCard src={im1}>
                <h3 >Synonyms</h3>
                <p>
                    Without a doubt, it is because of this French incorporation “English speakers can say that they are going to have a ‘drink’ (Anglo-Saxon origin) or a ‘beverage’ (Old French origin), or that they are going to ‘weep’ (Anglo-Saxon) or ‘cry’ (Old French)” which vastly expanded the new and flourishing language. In addition to these synonyms, entire new words were incorporated as well: “‘government’ is of French origin, as are the words ‘office,’ ‘city,’ ‘police,’ ‘tax,’ ‘jury,’ ‘attorney,’ and ‘prison.’” (Robinson 5)
                </p>
            </CustomCard>

        </div>
        <Footer />
    </>)
}