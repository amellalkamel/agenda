import { render, screen } from '@testing-library/react';
import DivEvnt from '../DivEvent';

describe("getPosition test", () => {
    const data = [
        {
            "id": 1,
            "start": "17:00",
            "duration": 60
        },
        {
            "id": 2,
            "start": "17:00",
            "duration": 120
        },
        {
            "id": 3,
            "start": "19:40",
            "duration": 10
        }
    ]
    it("return les positions des evenements", () => {
        render(<DivEvnt />);

    });
})

