// Simulating data loading
const data = [
    {"title": "Title of Research Paper 1"},
    {"title": "Title of Research Paper 2"},
    {"title": "Title of Research Paper 3"},
    {"title": "Title of Research Paper 4"},
    {"title": "Title of Research Paper 5"},
    {"title": "Title of Research Paper 6"},
    {"title": "Title of Research Paper 7"},
    {"title": "Title of Research Paper 8"},
    {"title": "Title of Research Paper 9"},
    {"title": "Title of Research Paper 10"}
]
; // Assume this is your loaded data

const svg = d3.select('#space').append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

const tooltip = d3.select('#tooltip');

svg.selectAll('.circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('cx', () => Math.random() * window.innerWidth)
    .attr('cy', () => Math.random() * window.innerHeight)
    .attr('r', 3)
    .on('mouseover', function(event, d) {
        tooltip.style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY + 10) + 'px')
            .classed('hidden', false)
            .text(d.title);
    })
    .on('mouseout', function() {
        tooltip.classed('hidden', true);
    });
