import Button from "./Button";
import { Routes } from "react-router-dom";


describe('<Button>', () => {
    it('mounts', () => {
        cy.mount(
            <Routes>
                <Button />
            </Routes>
        )
    });
});
