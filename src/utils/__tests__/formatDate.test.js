import { checkEventInRange, minutesToDate, startToMinute } from "../formatDate";
describe("minutesToDate test", () => {
    it("return une heure sous format 'hh:mm'", () => {
        const minutesToDateResult = minutesToDate(590)
        expect(minutesToDateResult).toEqual("09:50");
    });
})

describe("startToMinute test", () => {
    it("return les minutes d'une heure", () => {
        const startToMinuteResult = startToMinute("09:50")
        expect(startToMinuteResult).toEqual(590);
    });
})

describe("checkEventInRange test", () => {
    it(" l'evenement est entre '09:00' et '21:00'", () => {
        const checkEventInRangeResult = checkEventInRange(startToMinute('09:50'),30)
        expect(checkEventInRangeResult).toBeTruthy();
    });
    it("l'evenement n'est pas entre '09:00' et '21:00'", () => {
        const checkEventInRangeResult = checkEventInRange(startToMinute('08:50'),30)
        expect(checkEventInRangeResult).toBeFalsy();
    });
})