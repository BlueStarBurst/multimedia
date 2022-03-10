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
            <p><i>Bilingual Beowulf - MIT</i>. <a href="https://www.mit.edu/~jrising/webres/beowulf.pdf">https://www.mit.edu/~jrising/webres/beowulf.pdf</a>. </p>
            <p>Bondar, Vladimir. "Aoristic Drift and Narrative Perfect in Early Modern English: A Functional Approach." International Journal of English Studies, vol. 21, no. 2, July 2021, pp. 57+. Gale Academic OneFile, <a href="link.gale.com/apps/doc/A689557274/AONE?u=txshracd2560&sid=bookmark-AONE&xid=864b8a87">link.gale.com/apps/doc/A689557274/AONE?u=txshracd2560&sid=bookmark-AONE&xid=864b8a87</a>. Accessed 2 Mar. 2022.</p>
            <p>Crystal, David. “Middle English.” British Library, 31 Jan. 2018, <a href="https://www.bl.uk/medieval-literature/articles/middle-english">https://www.bl.uk/medieval&#8209;literature/articles/middle&#8209;english</a>. </p>
            <p>Ellis, Sian. "Journey into Anglo-Saxon England." British Heritage, vol. 33, no. 2, May 2012, pp. 38+. Gale OneFile: World History, <a href="link.gale.com/apps/doc/A286718124/PPWH?u=txshracd2560&sid=bookmark-PPWH&xid=4dfdfe5e">link.gale.com/apps/doc/A286718124/PPWH?u=txshracd2560&sid=bookmark-PPWH&xid=4dfdfe5e</a>. Accessed 2 Mar. 2022.</p>
            <p>Robinson, Bonnie J. and Getty, Laura, "British Literature I: Middle Ages to the Eighteenth Century and Neoclassicism" (2018). English Open Textbooks. 17.
                <a href="https://oer.galileo.usg.edu/english-textbooks/17">https://oer.galileo.usg.edu/english&#8209;textbooks/17</a>.
            </p>
            <p>The British Library. Anglo-Saxon Mappa Mundi, 1025-1050 (2018). <a href="https://www.bl.uk/collection-items/beowulf">Web</a>.</p>
            <p>The British Library. Beowulf (2014). <a href="http://www.bl.uk/onlinegallery/onlineex/unvbrit/a/001cottibb00005u00056v00.html">Print</a>.</p>

        </div>
        <Footer/>
    </>)
}