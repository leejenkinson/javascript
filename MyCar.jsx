import { useState } from "react";

const MyCar = () => {
    const [brand, setBrand] = useState("Ferrari");
    const [model, setModel] = useState("F40");
    const [colour, setColour] = useState("Red");
    const [year, setYear] = useState("1993");

    return (
        <>
            <div className="MyCar">
                <h2>I love this car:</h2>
                <p>The {brand} {model} in {colour} from the year {year}</p>

                <form>
                    <label>Brand: </label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <label>Model: </label>
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                    <label>Colour: </label>
                    <input type="text" value={colour} onChange={(e) => setColour(e.target.value)} />
                    <label>Year: </label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </form>
            </div>
        </>
    );
}

export default MyCar;