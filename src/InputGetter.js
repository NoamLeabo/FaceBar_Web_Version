function InputGetter({type, text}) {
    return(
        <div className="input-group mb-3">
        <input type={type} className="form-control loginInput" placeholder={text}
                  aria-label={text} aria-describedby="basic-addon1" />
        </div>
    );
}

export default InputGetter