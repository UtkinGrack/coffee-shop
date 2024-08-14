import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
// const emulator = {
//   StartCashin: (cb) => {
//     console.log('Cash acceptance started');

//     // Simulate cash acceptance process

//     setTimeout(() => {

//       cb(10); // Simulate cash inserted

//     }, 2000);

//   },

//   StopCashin: (cb) => {

//     console.log('Cash acceptance stopped');

//     cb();

//   },

//   BankCardPurchase: (amount, cb, display_cb) => {

//     console.log('Bank card payment started');

//     // Simulate bank card payment process

//     setTimeout(() => {

//       display_cb('Please insert your card');

//       setTimeout(() => {

//         display_cb('Processing payment...');

//         setTimeout(() => {

//           cb(true); // Simulate successful payment

//           display_cb('Payment successful!');

//         }, 2000);

//       }, 1000);

//     }, 2000);

//   },

//   BankCardCancel: () => {

//     console.log('Bank card payment cancelled');

//   },

//   Vend: (product_idx, cb) => {

//     console.log('Drink preparation started');

//     // Simulate drink preparation process

//     setTimeout(() => {

//       cb(true); // Simulate successful drink preparation

//       console.log('Drink prepared!');

//     }, 2000);

//   },

// };


// function App() {

//   const [selectedDrink, setSelectedDrink] = useState(null);

//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const [cashAmount, setCashAmount] = useState(0);

//   const [paymentResult, setPaymentResult] = useState(null);


//   useEffect(() => {

//     if (paymentMethod === 'cash') {

//       emulator.StartCashin((amount) => {

//         setCashAmount(amount);

//         setPaymentResult(true);

//       });

//     } else if (paymentMethod === 'bank_card') {

//       emulator.BankCardPurchase(10, (result) => {

//         setPaymentResult(result);

//       }, (message) => {

//         console.log(message);

//       });

//     }

//   }, [paymentMethod]);


//   const handleDrinkSelect = (drink) => {

//     setSelectedDrink(drink);

//   };


//   const handlePaymentMethodSelect = (method) => {

//     setPaymentMethod(method);

//   };


//   const handleCashInsert = (amount) => {

//     setCashAmount(amount);

//   };


//   const handleBankCardInsert = () => {

//     emulator.BankCardPurchase(10, (result) => {

//       setPaymentResult(result);

//     }, (message) => {

//       console.log(message);

//     });

//   };


//   const handleVend = () => {

//     emulator.Vend(selectedDrink.idx, (result) => {

//       console.log('Drink prepared!');

//     });

//   };


//   return (

//     <div className="container">

//       {selectedDrink ? (

//         <div className="payment-methods">

//           <h2>Payment Method</h2>

//           <button

//             className="payment-button"

//             onClick={() => handlePaymentMethodSelect('cash')}

//           >

//             Cash

//           </button>

//           <button

//             className="payment-button"

//             onClick={() => handlePaymentMethodSelect('bank_card')}

//           >

//             Bank Card

//           </button>

//           {paymentMethod === 'cash' ? (

//             <div className="cash-payment">

//               <h2>Cash Payment</h2>

//               <input

//                 type="number"

//                 value={cashAmount}

//                 onChange={(e) => handleCashInsert(e.target.value)}

//                 className="cash-input"

//               />

//               <button className="vend-button" onClick={handleVend}>

//                 Vend

//               </button>

//               {paymentResult ? (

//                 <p className="payment-success">The payment was successful</p>

//               ) : (

//                 <p className="payment-processing">Payment processing...</p>

//               )}

//             </div>

//           ) : (

//             <div className="bank-card-payment">

//               <h2>Bank Card Payment</h2>

//               <button

//                 className="insert-card-button"

//                 onClick={handleBankCardInsert}

//               >

//                 Insert Card

//               </button>

//               {paymentResult ? (

//                 <p className="payment-success">Payment successful!</p>

//               ) : (

//                 <p className="payment-processing">Payment processing...</p>

//               )}

//             </div>

//           )}

//         </div>

//       ) : (

//         <div className="drink-selection">

//           <h2>Drink Selection</h2>

//           <ul className="drink-list">

//             {drinks.map((drink) => (

//               <li

//                 key={drink.idx}

//                 onClick={() => handleDrinkSelect(drink)}

//                 className="drink-item"

//               >

//                 {drink.name} - {drink.price}€

//               </li>

//             ))}

//           </ul>

//         </div>

//       )}

//     </div>

//   );

// }


// const drinks = [

//   { idx: 0, name: 'Latte', price: 300 },

//   { idx: 1, name: 'Cappuccino', price: 400 },

//   { idx: 2, name: 'Mocha', price: 500 },

// ];


// ReactDOM.render(<App />, document.getElementById('root'));