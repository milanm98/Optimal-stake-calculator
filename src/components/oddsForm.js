import { useState } from "react";

function OddsForm(){

    const [realChance, setRealChance] = useState(0);
    const [balance, setBalance] = useState(0);
    const [userChance, setUserChance] = useState(0);

    const handleOddChange = (e) => {
        setRealChance((100 / e.target.value).toFixed(2));
    }

    const handleBalanceChange = (e) => {
        setBalance(e.target.value);
    }

    const handleUserChanceChange = (e) => {
        setUserChance(e.target.value);
    }

    const handleSubmit = () => {
        if(realChance !== 0 && userChance !== 0 && balance !== 0){
            alert(realChance);
        }
    }

    return (
        <form className="shadow-2xl
                         text-lg md:text-3xl 
                         w-full 
                         text-center 
                         flex
                         flex-col
                         justify-center
                         items-center
                         gap-10
                         mb-12">

            <input 
                required 
                type="number"
                step="0.1"
                placeholder="bookmaker odds" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleOddChange}>
            </input>

            <input 
                required 
                type="number"
                step="100"
                placeholder="Your balance" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleBalanceChange}>
            </input>

            <input 
                required 
                type="number"
                step="0.1"
                min="0" 
                max="1"
                placeholder="Chances ( 0 - 1 )" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleUserChanceChange}>
            </input>

            <button 
                type="submit"
                className="mb-12"
                onClick={handleSubmit}>
                Submit
            </button>

        </form>
    )
}

export default OddsForm;