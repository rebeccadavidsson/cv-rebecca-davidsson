import React from "react";
import * as d3 from "d3";
import SVGImage from '../../assets/images/blob.svg';
import SVGImage2 from '../../assets/images/blob2.svg';


const Chart = ({data, dimensions}) => {
    const svgRef = React.useRef(null);
    const {width, height, margin} = dimensions;
    const svgWidth = width + margin.left + margin.right;
    const svgHeight = height + margin.top + margin.bottom;
    const axisHeight = height + margin.top;
    var groupColor = d3.scaleSequential().domain([1,8])
        .interpolator(d3.interpolateYlOrRd);

    React.useEffect(() => {

        const svgEl = d3.select(svgRef.current);

        const xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([10, 0])
            .range([0, height])

        const xAxisGenerator = d3.axisBottom(xScale)
        svgEl.append("g")
            .attr("transform", "translate(" + margin.left + "," + axisHeight + ")")
            .call(xAxisGenerator)
        svgEl.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("font-weight", 600)
            .attr("fill", "rgb(156, 169, 179)")
            .attr("x", width + margin.left)
            .attr("y", svgHeight)
            .text("Passion");

        const yAxisGenerator = d3.axisLeft(yScale);
        svgEl.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(yAxisGenerator)
        svgEl.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("font-weight", 600)
            .attr("fill", "rgb(156, 169, 179)")
            .attr("x", -margin.top)
            .attr("y", margin.top / 2)
            .attr('transform', 'rotate(-90)')
            .text("Experience");

        const svgData = svgEl.selectAll().data(data);

        svgData.enter().append("svg:image")
            .attr("xlink:href", SVGImage)
            .attr('height', width / 1.2)
            .attr('width', height / 1.2)
            .attr("transform", "translate("+ width / 3 + ", 30)");
        svgData.enter().append("svg:image")
            .attr("xlink:href", SVGImage2)
            .attr('height', width / 1.5)
            .attr('width', height / 1.5)
            .attr("transform", "translate("+ width / 3 + "," +  height / 2.5 + ")");


        const fontSize = "15px";
        const circlesize = 38;
        svgData.enter().append("circle")
            .attr('id', d => "circle" + d.id)
            .attr("cx", d => xScale(d.passion + 1))
            .attr("cy", d => yScale(d.experience - 1))
            .attr("class", "blur")
            .attr("fill", d => "rgba(0, 0, 0, 0.2)")
            .attr("r", circlesize)
            .on('mouseover', function (d, i) {
                d3.select("#" + i.id)
                    .transition()
                    .duration(500)
                    .style("font-size", "20px");

                d3.select("#circle" + i.id)
                    .transition()
                    .duration(300)
                    .attr("r", circlesize + 7);

            })
            .on('mouseout', function (d, i) {
                d3.select("#" + i.id)
                    .transition()
                    .duration(500)
                    .style("font-size", fontSize)

                d3.select("#circle" + i.id)
                    .transition()
                    .duration(300)
                    .attr("r", circlesize);
            });
        svgData.enter().append("text")
            .text((d) => d.name)
            .attr('id', (d) => d.id)
            .attr('class', 'no-mouse')
            .style("font-size", fontSize)
            .style("text-anchor", "middle")
            .style("fill", "#d3d3d3")
            .style("font-weight", 600)
            .attr("transform", (d) => "translate(" + xScale(d.passion + 1) + "," + yScale(d.experience - 1.05) + ")")


    }, [data]); // Redraw chart if data changes

    return <svg style={{margin: '0 auto'}} ref={svgRef} width={svgWidth} height={svgHeight}/>;
};

export default Chart;