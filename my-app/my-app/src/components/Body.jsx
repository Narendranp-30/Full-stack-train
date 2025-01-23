import "../App.css";

const body = (props) => {
    return (
        <div className="border">
            <div>Body Component</div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Height : {props.height}</p>
            <p>Department : {props.department}</p>
        </div>
    );
};

export default body;