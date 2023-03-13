import React, { useEffect, useRef } from 'react'
import { structureData } from '../utils/structureData';
import { checkOverlap, getPosition } from '../utils/utils';
import data from '../data/data.json'

export default function DivEvnt() {


    /**
     * un tableau pour stocker les references des div
     */
    const divRefs = useRef([]);
    /**
     * appele a la fonction qui retourne la donnée structurer
     */
    const dataSorted = structureData(data)

    useEffect(() => {
        /**
         * appele a la fonction qui recoit les references des div et retourne un tableau des elements qui se chevauchent
         */
        const overlappingElements = checkOverlap(divRefs.current);
        /**
         * positionement des div events
         */
        overlappingElements.forEach(([element1, element2]) => {
            if ((element1.style.width === element2.style.width) && (element1.style.height > element2.style.height)) {
                element2.style.left = `${parseFloat(element1.style.width) + 5}%`
            }
            else if ((element1.style.width === element2.style.width) && (element2.style.height > element1.style.height)) {
                element1.style.left = `${parseFloat(element2.style.width) + 5}%`
            }

            if (element1.style.width > element2.style.width) {
                element1.style.width = element2.style.width
            }
            else if (element2.style.width > element1.style.width)
                element2.style.width = element1.style.width


        })
    }, []);

    return (
        <div>
            {dataSorted.map((divParent, index) => {
                const parent = data.filter(element => element.id === parseInt(Object.keys(divParent).join()));
                /**
                 * recupiration des positions des div
                 */
                const { top, left, width, height } = getPosition(parent[0], divParent[parseInt(Object.keys(divParent).join())].length);
                return (
                    <div key={index}>
                        <div
                            data-key={parent[0].id}
                            key={parent[0].id}
                            className="floatenDiv"
                            ref={el => (divRefs.current[parent[0].id] = el)}
                            style={{
                                top: top,
                                left: left,
                                width: width,
                                height: height,
                                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}70`,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {parent[0].id}

                        </div>
                        <div>
                            {
                                divParent[parseInt(Object.keys(divParent).join())].flat().map((divFils, j) => {
                                    const isLargeNumber = (element) => element.id === divFils.id;
                                    /**
                                     * recupiration des positions des div
                                     */
                                    const widthLength = divParent[parseInt(Object.keys(divParent).join())].length
                                    const leftLength = divParent[parseInt(Object.keys(divParent).join())].findIndex(isLargeNumber)
                                    const { top, left, width, height } = getPosition(divFils, widthLength, leftLength);
                                    return (
                                        <div
                                            data-key={divFils.id}
                                            key={divFils.id}
                                            className="floatenDiv"
                                            ref={el => (divRefs.current[divFils.id] = el)}
                                            style={{
                                                top: top,
                                                left: left,
                                                width: width,
                                                height: height,
                                                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}70`,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {divFils.id}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
