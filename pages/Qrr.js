import React, { useState } from 'react';
import "../styles/Qrr.css";



function Qrr() {
 
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
 
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const [processingPayment, setProcessingPayment] = useState(false);

  const processPayment = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setPaymentStatus('Please enter a valid amount.');
      return;
    }

    if (!selectedPaymentMethod) {
      setPaymentStatus('Please select a payment method.');
      return;
    }

    

    // Disable input details during payment processing
    setProcessingPayment(true);

    // Simulate a successful payment after a short delay
    setPaymentStatus('Payment sent successfully!');

    setTimeout(() => {
      // Clear the success message and re-enable input details after 3 seconds
      setPaymentStatus('');
      setProcessingPayment(false);

    }, 3001);
  };

  return (
 
      <div >
      <h2>Select Payment Method</h2>
     
  
      </div>
      
  );
}

export default Qrr;