let philosophy = [
{title:"the republic",pages:10000},
{title:"Thus Spoke Zarathustra",pages:9800},
{title:"Meditations", pages:7000 }
];

let numbs= philosophy.map(philos=>philos.pages)

console.log(numbs);

let all = numbs.reduce((acc,current)=> acc+current,0 )

console.log(all/3);

