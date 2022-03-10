import React, { useRef, useState, useEffect } from "react"

export default function Header(props) {

    function handleClick(e) {
        document.documentElement.scrollTo({
            top: 1,
            behavior: 'smooth'
        })
        setTimeout(() => {
            window.location = "/multimedia/";
        }, 500)
    }

    function redir(e, name = "") {
        document.documentElement.scrollTo({
            top: 1,
            behavior: 'smooth'
        })
        setTimeout(() => {
            window.location = "/multimedia/" + name;
        }, 1000)
    }

    if (props.static) {
        return (<div className="header">
            <div className="div1" onClick={(e) => { redir(e, "changes") }}>
                <p>changes</p>
            </div>
            <h1 onClick={handleClick}>Old English</h1>
            <div className="div2" onClick={(e) => { redir(e, "sources") }}>
                <p>sources</p>
            </div>
        </div>)
    }

    const { scrollX, scrollY } = useWindowScrollPositions()

    const head = useRef(null)

    useEffect(() => {
        if (!head.current) {
            return;
        }
        if ((scrollY == 0) && head?.current) {
            head.current.className = "header-main";
        } else {
            head.current.className = "header";
        }
    }, [scrollY, head?.current])



    return (<div ref={head} className="header">
        <div className="div1" onClick={(e) => { redir(e, "changes") }}>
            <p>changes</p>
        </div>
        <h1 onClick={handleClick}>Old English</h1>
        <div className="div2" onClick={(e) => { redir(e, "sources") }}>
            <p>sources</p>
        </div>
    </div>)
}

const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}
