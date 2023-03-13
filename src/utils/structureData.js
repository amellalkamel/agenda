import { checkEventInRange, minutesToDate, startToMinute } from "./formatDate";
// import { httpClient } from "./httpClient";
import { checkValues } from "./utils";

/**
 * 
 * @returns fonction qui structure la donnée
 */
export const structureData = (data) => {
  /**
   * déclarer un variable key initialise par l'id de premier événement
   */
  let dataSorted = [];

  if (data.length) {
    /**
  * trier la donnée par start (date debut d'evénement)
  */
    data.sort((a, b) => a.start.localeCompare(b.start));
    /**
     * appele a la fonction qui convert les minutes en date
     * @param {number} endEvent c'est la date de fin d'événement en minute
     * @returns {string} 
     */
    let endEvent = minutesToDate(
      /**
       * appele a la fonction qui convert une date en minutes
       * @param {string}
       * @returns {number}
       */
      startToMinute(data[0].start) + data[0].duration
    );
    /**
     * déclarer un array value pour stocker les événements 
     * déclarer un array dataSorted pour stocker le resultat final
     */
    let key = data[0].id;
    let value = [];
    /**
     * bouclée sur la donnée trier à partir de 2 elements
     */
    for (let i = 1; i < data.length; i++) {
      /**
       * vérifier si l'heure de début de l'événement de 2 éléments est superiure ou egale a la fin de l'événement de 1 element 
       * si la condition est vérifier 
       * construit la nouvelle data dans dataSorted et actualiser key et value
       * sinon
       * construit le value
       * 
       */
      // console.log(checkEventInRange(startToMinute(data[i].start),data[i].duration))
      if(checkEventInRange(startToMinute(data[i].start),data[i].duration))
      if (startToMinute(data[i].start) >= startToMinute(endEvent)) {

        dataSorted.push({
          [key]: checkValues(value).length > 0 ? checkValues(value) : value
        });
        key = data[i].id;
        value = [];
        endEvent = minutesToDate(
          startToMinute(data[i].start) + data[i].duration
        );
      } else {
        value.push(data[i]);
      }
    }
    dataSorted.push({
      [key]: checkValues(value).length > 0 ? checkValues(value) : value
    });
    /**
     * retourner la donnée structure
     * @example console.log('dataSorted ---------->',[{'12':[]},{'9':[{id:6,start:'10:25',duration:35}]}])
     */
    return dataSorted
  }
  else
    return dataSorted

}
