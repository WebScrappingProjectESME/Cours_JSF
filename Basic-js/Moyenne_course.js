const resultList = [
    {lastname: 'bob', firstname: 'xcv', result: '1:34.2'},
    {lastname: 'bobby', firstname: 'wxwc', result: '1:37.2'},
    {lastname: 'bobette', firstname: 'qsd', result: '1:42.2'},
    {lastname: 'alfred', firstname: 'azert', result: '2:34.5'},
    {lastname: 'collins', firstname: 'miguel', result: '3:13.2'},
    {lastname: 'collins', firstname: 'kim', result: '1:15.1'}
];

const add = (acc, value) => acc + value;

const resultToNumber = (string) => {
    const [min, sec] = string.split(':');
    return Number(min)*60 + Number(sec);
};
const numberToResult = (number) => {
    const sec = number % 60;
    const min = (number-sec)/60;
    return [min,sec.toFixed(1)].filter(x => x !== '').join(':');
}

const calculateAverage = (list) => {
    const mean = ( ( list.map(y => resultToNumber(y.result)) ).reduce(add) ) / list.length;
    return numberToResult(mean);
}

const getPodium = (list,sizePodium) => {
    return list.sort( (a,b) => resultToNumber(a.result) - resultToNumber(b.result) ).slice(0,sizePodium);
}

const printResult = (personData) => {
    return {name:personData.lastname.concat(" ", personData.firstname),result:personData.result};
}



const printInfos = (list) => {

    const podium = getPodium(list,3);

    return {average:calculateAverage(list),
            podiumAverage:calculateAverage(podium),
            winner:printResult(podium[0]),
            podium: podium.map(y => printResult(y))
            }
}

console.log(printInfos(resultList));