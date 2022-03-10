import { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

export default function CustomCard(props) {

    const { scrollX, scrollY } = useWindowScrollPositions()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const cardRef = useRef(null)
    const [dist, setDist] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

        if (cardRef?.current) {
            let tempDist = Math.abs(cardRef.current.offsetTop - (scrollY + (windowDimensions.height / 2 - cardRef.current.clientHeight / 2)))

            cardRef.current.style.opacity = ((windowDimensions.height/2 - tempDist) / (windowDimensions.height/2));
            setDist(tempDist);
        }
    }, [scrollY, cardRef?.current])

    return (
        <div className="custom-card" ref={cardRef}>
            {props.children}
        </div>
    )
}

export const useWindowScrollPositions = () => {

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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}