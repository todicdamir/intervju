import "./App.css";
import { useState } from "react";
import axios from "axios";
import Input from "./Input";

function App() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [numbers, setNumbers] = useState([]);

  function isPrimeNumber(num) {
    if (num === 0) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  async function numberHandler(e) {
    e.preventDefault();

    let numberArray = [];

    for (let i = 1; i <= 10; i++) {
      const fieldName = `number${i}`;
      const fieldValue = parseInt(e.target[fieldName].value);

      const numberToAdd = isNaN(fieldValue) ? 0 : fieldValue;
      numberArray.push(numberToAdd);
    }

    await axios
      .post("http://localhost:3000/numbers", { data: numberArray })
      .then((res) => {
        setNumbers(res.data);
        console.log(res.data);
        setShowNumbers(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleBackClick() {
    setNumbers([]);
    setShowNumbers(false);
  }
  return (
    <>
      <div>
        {!showNumbers && ( 
         <section className="wrapper">
         <div className="container">
           <div style={{ height: '100vh' }} className="row align-items-center">
             <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-left">
               <form id="login-form" onSubmit={numberHandler} className="rounded bg-white shadow py-5 px-4">
                 <h3 className="text-dark fw-bolder fs-4 mb-2">Numbers:</h3>
                 <Input number={1} />
                 <Input number={2} />
                 <Input number={3} />
                 <Input number={4} />
                 <Input number={5} />
                 <Input number={6} />
                 <Input number={7} />
                 <Input number={8} />
                 <Input number={9} />
                 <Input number={10} />
                 <button
                   type="submit"
                   className="btn btn-danger submit_btn w-100 my-4"
                 >
                   Sort
                 </button>
               </form>
             </div>
           </div>
         </div>
       </section>
          
        )}
        {showNumbers && (
          <div>
            <ul className="number-list">
              {numbers.map((number) => (
                <li
                  key={number}
                  className={isPrimeNumber(number) ? "prime" : ""}
                >
                  {number}
                </li>
              ))}
            </ul>
          <div className="back-button">
          <button
              type="button"
              className="btn btn-danger"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
            
          </div>
        )}
      </div>
    </>
  );
}

export default App;


