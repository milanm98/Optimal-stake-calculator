function OddsForm(){
    return (
        <form className="shadow-2xl
                        text-xl md:text-2xl 
                        w-full 
                        text-center 
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-10">

            <input required type="text"
                   placeholder="Enter odds" 
                   className="text-center w-1/5">
                   </input>

            <button type="submit"
                    className="mb-12">
                    Submit</button>

        </form>
    )
}

export default OddsForm;