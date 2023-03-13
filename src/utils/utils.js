import { minutesToDate, startToMinute } from "./formatDate";
/**
 * fonction qui vérifie les éléments qui se chevauchent
 * 
 * @param {object} divRefs 
 * @returns 
 */
export const checkOverlap = (divRefs) => {
    const elements = divRefs;
    const overlapping = [];

    for (let i = 1; i < elements.length; i++) {
        const element1 = elements[i];

        for (let j = i + 1; j < elements.length; j++) {
            const element2 = elements[j];

            const div1 = element1.getBoundingClientRect();
            const div2 = element2.getBoundingClientRect();

            if (
                div1.top < div2.bottom &&
                div1.bottom > div2.top &&
                div1.left < div2.right &&
                div1.right > div2.left
            ) {
                overlapping.push([element1, element2]);
            }
        }
    }
    return overlapping
}

/**
 * fonction qui calcule le top,left,width et height pour positionne les divs 
 * @param {event} event 
 * @param {number} widthDevise 
 * @param {number} leftCalc 
 * @returns 
 */
export const getPosition = (event, widthDevise, leftCalc) => {
    /**
     * top : (date de debut - (9h en minute = 540) * 100) / (13 nbr heure * 60)
     * width : la taille d'ecran / le nombre d'evenement en parallale
     * height : la durer d'evenement * la taille d'ecran /  (13 nbr heure * 60)
     */
    let topCalc = startToMinute(event.start)
    return { top: `${(((topCalc - 540) * 100) / 780) + ((100 / 13) / 2)}%`, left: `${(leftCalc + 1) * (95 / (widthDevise + 1)) + 5}%`, width: `${95 / (widthDevise + 1)}%`, height: `${(event.duration * 100) / 780}%` };
};

/**
 * fonction qui verife les evenements de value si le 2 evenement commance avant ou apres le 1 evenement
 * @param {event[]} valuesArr 
 * @returns 
 */
export const checkValues = (valuesArr) => {
    let newOutput = [];
    let prevVal = valuesArr[0];
    for (let i = 1; i < valuesArr.length; i++) {
        if (
            minutesToDate(startToMinute(prevVal.start) + prevVal.duration) <
            minutesToDate(startToMinute(valuesArr[i].start))
        ) {
            newOutput.push([prevVal, valuesArr[i]]);

            prevVal = valuesArr[i];
        }
    }
    return newOutput;
};