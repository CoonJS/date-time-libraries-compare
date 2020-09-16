import { DateTime } from "luxon";
import { format } from 'date-fns'
import moment from 'moment';


window.onload = function() {
  const luxon = DateTime.local().toLocaleString(DateTime.DATE_SHORT);
  const dateFNS = format(new Date(), 'dd.MM.yyyy')
  const momentDate = moment(new Date()).format('DD.MM.yyyy');

  const range = 10000


  console.time('luxon')
  for (let i =0; i < range; i ++ ) {
    console.log(DateTime.local().toLocaleString(DateTime.DATE_SHORT))
  }
  console.timeEnd('luxon')

  // console.time('dateFNS')
  // for (let i =0; i < range; i ++ ) {
  //   console.log(format(new Date(), 'dd.MM.yyyy'))
  // }
  // console.timeEnd('dateFNS')
  //
  // console.time('moment')
  // for (let i =0; i < range; i ++ ) {
  //   console.log(moment(new Date()).format('DD.MM.yyyy'))
  // }
  // console.timeEnd('moment')
}