import './index.css'

const InputPattern = ({
    name,
    label,
    type,
    register,
    placeholder,
    className,
    errors
}) => (
    <div className={`input-container ${className ? className : ""}`}>
        {label && (
            <label htmlFor={name} className='control-label' style={{ alignSelf: 'start' }}>
                {label}
                <span className="text-danger ml-1">*</span>
            </label>
        )}
        <div style={{ width: "100%" }}>
            <input
                name={name}
                type={type}
                {...register(name)}
                className=""
                placeholder={placeholder}
                style={{ width: "100%" }}
            />
        </div>
        {errors && <span className="error">{errors[name]?.message}</span>}
    </div>
)

export default InputPattern