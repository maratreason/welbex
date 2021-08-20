import React, { useState } from 'react'
import "./Select.css";

const Select = ({options, setOption}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [customOptions, setCustomOptions] = useState(options);
    const [option, setCurOption] = useState("Выберите из списка");

    const changeValue = (e) => {
        setOption(e.target.dataset.value);
        setCurOption(e.target.dataset.name);
    }

    return (
        <div
            className="select"
            onClick={() => setIsChecked(!isChecked)}
        >
            <div className="option__default" disabled>{option}</div>
            <div className="options">
                {isChecked && 
                    customOptions.map(el => 
                        <div 
                            className="option"
                            key={el.id}
                            data-value={el.value}
                            data-name={el.name}
                            onClick={e => changeValue(e)}
                        >
                            {el.name}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Select
