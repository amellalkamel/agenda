import { structureData } from "../structureData";
const data = [
    {
      id: 1,
      start: "17:00",
      duration: 60
    },
    {
      id: 2,
      start: "17:00",
      duration: 120
    },
    {
      id: 3,
      start: "19:40",
      duration: 10
    },
    {
      id: 4,
      start: "15:00",
      duration: 20
    },
    {
      id: 5,
      start: "18:00",
      duration: 60
    },
    {
      id: 6,
      start: "10:25",
      duration: 35
    },
    {
      id: 7,
      start: "10:45",
      duration: 30
    }
  ];
  const dataEmpty = []
  
  
  
describe("structureData test", () => {
    it("return data trier par debut d'evenement + la duree d'evenement", () => {
        const structureDataResult = structureData(data)
        expect(structureDataResult).toEqual([{'6': [{id: 7, start: '10:45', duration: 30}]},{'4':[]},{1:[{id: 2, start: '17:00', duration: 120}]},{'5':[]},{'3':[]}]);
    });
    it("verifier si data est vide", () => {
        const structureDataResult = structureData(dataEmpty)
        expect(structureDataResult).toEqual([]);
    });
})

