const ButtonDeletePost = props => {

    return (
        <button 
        type="button" 
        className="btn btn-outline-danger h-100 ms-2">
        {props.children}</button>
    );
};

export default ButtonDeletePost
