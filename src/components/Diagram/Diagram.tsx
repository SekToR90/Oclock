import React, { useEffect, useRef } from 'react';

import * as d3 from "d3";

// import classes from './Diagram.module.scss'

export const Diagram: React.FC = () => {
    const inputEl = useRef(null);
    const width: number = 537;
    const height: number = 530;

    useEffect(() => {

        const svg: SVGElement | {} | HTMLElement | any = d3.select(inputEl.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        svg.append("g")

    }, [])

    return (
        <svg ref={inputEl} />
    );
}