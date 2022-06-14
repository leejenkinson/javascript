import PropTypes from "prop-types";

const Cars = ({ make, model, colour, mileage }) => {
    return (
        <div className = "Cars">
            <h4>{make}</h4>
            <p>{model}</p>
            <p> Colour: {colour}</p>
            <p>Miles: {mileage}</p>
        </div>
    );
}

export default Cars;

Cars.propTypes = {
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
};