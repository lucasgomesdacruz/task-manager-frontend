import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                value={value}  // Atribuindo o valor do input
                onChange={(e) => onChange(e)}  // Correção do nome da prop
            />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default CustomInput;

