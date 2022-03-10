import React from "react"
import CustomCard from "./card"
import Footer from "./footer"
import Header from "./header"

export default function Sources(props) {
    return (<>
        <Header static />
        <div className="sources">
            <h2>Works Cited</h2>
            <br></br>
            <p><i>Bilingual Beowulf - MIT</i>. https://www.mit.edu/~jrising/webres/beowulf.pdf. </p>
            <p>Crystal, David. “Middle English.” British Library, 31 Jan. 2018, https://www.bl.uk/medieval&#8209;literature/articles/middle&#8209;english. </p>
            <p>Ellis, Sian. "Journey into Anglo-Saxon England." British Heritage, vol. 33, no. 2, May 2012, pp. 38+. Gale OneFile: World History, link.gale.com/apps/doc/A286718124/PPWH?u=txshracd2560&sid=bookmark-PPWH&xid=4dfdfe5e. Accessed 2 Mar. 2022.</p>
            <p>Robinson, Bonnie J. and Getty, Laura, "British Literature I: Middle Ages to the Eighteenth Century and Neoclassicism" (2018). English Open Textbooks. 17.
                https://oer.galileo.usg.edu/english&#8209;textbooks/17.
            </p>
            <p>The British Library. Anglo-Saxon Mappa Mundi, 1025-1050 (2018). Web.</p>
            <p>The British Library. Beowulf (2014). Print.</p>

        </div>
        <Footer/>
    </>)
}