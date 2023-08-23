import { useState } from 'react';


const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <button onClick={handleToggle}>{isOn ? "Encendido"}
    );
};

export default ToggleButton;