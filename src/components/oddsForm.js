import { useState } from "react";

function OddsForm(){

    const [realChance, setRealChance] = useState(0);

    const handleOddChange = (e) => {
        setRealChance((100 / e.target.value).toFixed(2));
    }

    const handleSubmit = () => {
        if(realChance !== 0){
            alert(realChance)
        }
    }

    return (
        <form className="shadow-2xl
                         text-lg md:text-2xl 
                         w-full 
                         text-center 
                         flex
                         flex-col
                         justify-center
                         items-center
                         gap-10">

            <input required 
                        type="text"
                            placeholder="bookmaker odds" 
                                className="text-center 
                                           w-3/5 md:w-1/5"
                                    onChange={handleOddChange}>
            </input>

            <input required 
                        type="text"
                            placeholder="Your balance" 
                                className="text-center 
                                           w-3/5 md:w-1/5">
            </input>

            <input required 
                        type="text"
                            placeholder="Chances ( 0 - 1 )" 
                                className="text-center 
                                           w-3/5 md:w-1/5">
            </input>

            <button type="submit"
                        className="mb-12"
                            onClick={handleSubmit}>
                                Submit
            </button>

        </form>
    )
}

export default OddsForm;