import React, { useState } from 'react';
import { emulator } from "../emulator"

const PreparationScreen = ({ drink, paymentMethod }) => {
    const [isOrderReady, setIsOrderReady] = useState(false);

    React.useEffect(() => {
        emulator.Vend(drink.idx, (success) => {
            if (success) {
                setIsOrderReady(true);
            } else {
                alert("Произошла ошибка при выдаче напитка.");
            }
        });
    }, [drink]);

    return (
        <div className='preparation-screen'>
            <h2 className='preparation-screen-title'></h2>
            <div className='preparation-svg'>
                {isOrderReady ? (
                    <div className='order-ready-screen'>
                        <h2 className='order-ready-screen-title'>Заказ выдан!</h2>
                        <div className='order-ready-svg'>
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <path className="linear-gradient" d="M 20 50 L 50 80 L 80 20" />
                                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                                    <stop offset="0%" stop-color="#F7DC6F" />
                                    <stop offset="100%" stop-color="#34C759" />
                                </linearGradient>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className='loading-screen'>
                        <h2 className='loading-screen-title'>Приготовление напитка...</h2>
                        <div className='loading-svg'>
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#F7F7F7" strokeWidth="10" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#EFCCB9" strokeWidth="10" className="loading-circle" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreparationScreen;