import React, { useState } from 'react';
import { emulator } from "../emulator"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as MyVector } from '../svg/Vector.svg';

const PaymentOptions = ({ totalAmount, onPaymentSuccess, onPaymentMethodSelect, cardBalance }) => {
    const handlePayment = (method) => {
        onPaymentMethodSelect(method);
        if (method === 'cash') {
            emulator.StartCashin((receivedAmount) => {
                if (receivedAmount >= totalAmount) {
                    emulator.StopCashin();
                    const change = receivedAmount - totalAmount;
                    alert(`Сдача: ${change} рублей`);
                    onPaymentSuccess(); // Call onPaymentSuccess
                    console.log("onPaymentSuccess called");
                }
            }, totalAmount);
        } else if (method === 'card') {
            emulator.BankCardPurchase(totalAmount, (success) => {
                if (success) {
                    onPaymentSuccess(); // Call onPaymentSuccess
                    console.log("onPaymentSuccess called");
                } else {
                    alert("Ошибка транзакции!");
                }
            }, (message) => {
                console.log(message);
            }, cardBalance);
        }
    };

    return (
        <div className='payment-options'>
            <div className='payment-vector-div'>
                <MyVector className='payment-vector'/>
            </div>

            <h2 className='payment-options-title'>Выберите способ оплаты</h2>
            <button className='payment-button cash' onClick={() => handlePayment('cash')}>
                Оплата наличными
            </button>
            <button className='payment-button card' onClick={() => handlePayment('card')}>
                Безналичная оплата
            </button>
        </div>
    );
};

export default PaymentOptions;