import React, { useRef, useState, useEffect } from "react"

export default function Header(props) {

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
        <h1>Old English</h1>
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