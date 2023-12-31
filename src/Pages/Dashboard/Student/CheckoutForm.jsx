import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import  { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import './pay.css'
const CheckoutForm = ({select,price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const {user} = useAuth()
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
   
      axiosSecure.post('/pay-intent', { price })
          .then(res => {
              console.log(res.data.clientSecret)
              setClientSecret(res.data.clientSecret);
          })
  
    
}, [price, axiosSecure])



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );

  if (confirmError) {
      console.log(confirmError);
  }

  console.log('payment intent', paymentIntent)
  setProcessing(false)
  if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
       
    }
    axiosSecure.post('/payments', payment)
        .then(res => {
            console.log(res.data);
            if (res.data.result.insertedId) {
              alert('done payment')
            }
        })
  }
  };

  

  return (
    <>
      <form className="w-full max-w-sm mx-auto my-4 p-4" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8 mt-2">{cardError}</p>}
      {transactionId && <p className="text-green-500 mt-2">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
