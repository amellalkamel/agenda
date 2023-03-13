/**
 * fonction qui convert les minutes en date
 * 
 * @param {number} minutes 
 * @returns {string} format 'hh:mm'
 */
export const minutesToDate = (minutes) => {
    /**
     * diviser les minutes sur 60 et stocker la valeur arrondit dans le variable hour
     * ensuite calculer les minutes restant et stocker le dans le variable minute 
     * apres construire un varaible time qui affiche les minutes en format 'hour:minute'
     */
    const hour = Math.floor(minutes / 60);
    const minute = Math.floor(minutes - (hour * 60));

    const time = `${hour
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    return time;
};
/**
 * fonction qui convert un string (start) qui est en format 'hh:mm' en number
 * 
 * @param {string} start 
 * @returns {number}
 */
export const startToMinute = (start) => {
    /**
     * spliter le parametre start par : et stocker le resultat dans hour et minute
     * convertie hour en int et multiplié par 60
     * ensuite rajouter les minutes converties en int
     */
    const [hour, minute] = start.split(":");
    return parseInt(hour) * 60 + parseInt(minute);
}
/**
 * fonction qui verife si l'evenement est entre '09:00' et '21:00'
 * @param {event} event 
 * @returns 
 */
export const checkEventInRange = (eventStart, duration) => {
    let inRange = false
    if (eventStart >= 540 && eventStart + duration <= 1260)
        inRange = true

    return inRange
}

