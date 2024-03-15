import * as R from 'ramda';

const resultList = [
  {lastname: 'bob', firstname: 'xcv', result: '1:34.2'},
  {lastname: 'bobby', firstname: 'wxwc', result: '1:37.2'},
  {lastname: 'bobette', firstname: 'qsd', result: '1:42.2'},
  {lastname: 'alfred', firstname: 'azert', result: '2:34.5'},
  {lastname: 'collins', firstname: 'miguel', result: '3:13.2'},
  {lastname: 'collins', firstname: 'kim', result: '1:15.1'}
];

const toMinutes = R.pipe(Number, R.multiply(60));

const firstTermToMinutes = R.pipe(R.nth(0), toMinutes);
const secondTermAsNumber = R.pipe(R.nth(1), Number);

const resultToNumber = R.pipe(
  R.split(':'),
  R.juxt([firstTermToMinutes, secondTermAsNumber]),
  R.apply(R.add)
);

const getMeanOfList = R.pipe(R.pluck('result'), R.map(resultToNumber), R.mean);
const sortByResult = R.pipe(R.sortBy(R.pipe(R.prop('result'), resultToNumber)));

const getPodium = R.pipe(sortByResult, R.take(3));
const getWinner = R.pipe(sortByResult, R.head);
