const ButtonRead = props => {

    return (
        <button 
        type="button" 
        className="btn bg-primary btn-lg text-light">
        {props.children}</button>
    );
};

export default ButtonRead
