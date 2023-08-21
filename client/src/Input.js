


export default function input(props){



    return(
        <div className="form-floating mb-3">
                   <input
                     type="number"
                     name={`number${props.number}`}
                     className="form-control"
                     id="floatingInput"
                     placeholder="number"
                   />
                   <label htmlFor="floatingInput1">Number</label>
        </div>

    );



}