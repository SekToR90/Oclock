import React, { useEffect, useRef } from 'react';

import * as d3 from "d3";

import { CardData } from '../../util/CardsData'
// import classes from './Diagram.module.scss'

export const Diagram: React.FC = () => {
    const inputEl = useRef(null);
    const innerWH: number = 480; // inner width and height clock component, in pixels
    const outerWH: number = 530; // outer width and height diagram component, in pixels

    useEffect(() => {
        const innerRadius: number = innerWH / 2;
        const outerRadius: number = outerWH / 2;

        const startValue = d3.map(CardData, y => (360 * (y.startTask.hour * 60 + y.startTask.minute)) / 1440);
        const endValue = d3.map(CardData, y => (360 * (y.finishTask.hour * 60 + y.finishTask.minute)) / 1440);

        const stroke = innerRadius > 0 ? "none" : "white"; // stroke separating widths
        const strokeWidth = 1; // width of stroke separating wedges
        const strokeLinejoin = "round"; // line join of stroke separating wedges
        
        const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(i => startValue[i]).endAngle(i => endValue[i]);

        const svg: SVGElement | {} | HTMLElement | any = d3.select(inputEl.current)
            .attr("width", outerWH)
            .attr("height", outerWH)
            .attr("viewBox", [-outerWH / 2, -outerWH / 2, outerWH, outerWH])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        svg.append("g")
                .attr("stroke", stroke)
                .attr("stroke-width", strokeWidth)
                .attr("stroke-linejoin", strokeLinejoin)
            .append("path")
                .attr("fill", 'green')
                .attr("d", arc)
            .join("path")
            ;
    }, [])

    return (
        <svg ref={inputEl} />
    );
}