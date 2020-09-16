import { DateTime } from "luxon";
import { format } from 'date-fns'
import moment from 'moment';


window.onload = function() {
  const luxon = DateTime.local().toFormat('dd.MM.yyyy');
  const dateFNS = format(new Date(), 'dd.MM.yyyy')
  const momentDate = moment(new Date()).format('DD.MM.yyyy');

  console.log('reference', { luxon, dateFNS, momentDate });

  const range = 1000000


  const button = document.createElement('button')
  button.innerText = 'START'

  button.addEventListener('click', function () {
    startPerformance()
  })

  document.body.appendChild(button)

  function startPerformance() {
    startDateFnsPerformance()
    startLuxonPerformance()
    startMomentPerformance()
  }

  function startLuxonPerformance() {
    console.time('luxon')
    for (let i =0; i < range; i ++ ) {
      DateTime.local().toFormat('dd.MM.yyyy');
    }
    console.timeEnd('luxon')
  }

  function startDateFnsPerformance() {
    console.time('dateFNS')
    for (let i =0; i < range; i ++ ) {
      format(new Date(), 'dd.MM.yyyy')
    }
    console.timeEnd('dateFNS')
  }

  function startMomentPerformance() {

    console.time('moment')
    for (let i =0; i < range; i ++ ) {
      moment(new Date()).format('DD.MM.yyyy')
    }
    console.timeEnd('moment')
  }
}
