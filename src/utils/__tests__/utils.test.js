import { startToMinute } from "../formatDate";
import { checkValues, getPosition } from "../utils";

describe("getPosition test", () => {
    it("return les positions des evenements", () => {
        const event = {
            id: 1,
            start: "17:00",
            duration: 60
        }
        const topCalc = startToMinute(event.start)
        const checkOverlapResult = getPosition(event, 2, 1)
        expect(checkOverlapResult).toEqual({ top: `${(((topCalc - 540) * 100) / 780) + ((100 / 13) / 2)}%`, left: `${(1 + 1) * (95 / (2 + 1)) + 5}%`, width: `${95 / (2 + 1)}%`, height: `${(event.duration * 100) / 780}%` });
    });
})

describe("checkValues test", () => {
    it("return les positions des evenements", () => {
        const events1 = [
            {
                "id": 14,
                "start": "19:20",
                "duration": 10
            },
            {
                "id": 3,
                "start": "19:40",
                "duration": 10
            }
        ]

        const events2 = [
            {
                "id": 10,
                "start": "11:50",
                "duration": 20
            },
            {
                "id": 15,
                "start": "11:50",
                "duration": 30
            }
        ]
        const checkValuesResult1 = checkValues(events1)
        const checkValuesResult2 = checkValues(events2)

        expect(checkValuesResult1).toEqual([[{
            "id": 14,
            "start": "19:20",
            "duration": 10
        },
        {
            "id": 3,
            "start": "19:40",
            "duration": 10
        }]]);
        expect(checkValuesResult2).toEqual([])
        expect([]).toEqual([])

    });
})