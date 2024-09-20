function Button({onClickHandler}){
    return(
        <button onClick={onClickHandler} className="mt-5 px-4 border rounded-md border-black">Reset</button>
    )
}

export default Button;