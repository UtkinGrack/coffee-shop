import React, { useState, useEffect } from 'react';
import DrinksMenu from './components/DrinksMenu';
import PaymentOptions from './components/PaymentOptions';
import PreparationScreen from './components/PreparationScreen';
import './App.css'

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setIsPaymentInProgress(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccessful(true);
    setIsPaymentInProgress(false);
  };

  useEffect(() => {
    if (isPaymentSuccessful) {
      console.log("isPaymentSuccessful is true!");
    }
  }, [isPaymentSuccessful]);

  return (
    <div className='App'>
      <main className='main'>
        {!selectedDrink ? (
          <DrinksMenu onDrinkSelect={handleDrinkSelect} />
        ) : !paymentMethod || isPaymentInProgress ? (
          isPaymentInProgress ? (
            <p className='payment-in-progress'>Обработка оплаты...</p>
          ) : (
            <PaymentOptions
              totalAmount={selectedDrink.price}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentMethodSelect={handlePaymentMethodSelect}
              cardBalance={1000} // Балланс карты
            />
          )
        ) : isPaymentSuccessful ? (
          <PreparationScreen drink={selectedDrink} paymentMethod={paymentMethod}/>
        ) : (
          <div className='payment-failed'>Payment failed. Try again!</div>
        )}
      </main>
    </div>
  );
}

export default App;