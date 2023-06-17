import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelect from "../../../Hooks/useSelect";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment);

const Payment = () => {
  const [select] = useSelect();
 

  const total = select.reduce((sum, item) => sum + item.price, 0);

  const price = parseFloat(total.toFixed(2));
 
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm select ={select} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
