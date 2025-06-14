import { useNavigate } from "react-router-dom";
export const Home=() => {

  const navigate = useNavigate();

  const onGoCart = () => {
    navigate('/cart');
  };
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <button onClick={onGoCart}>Go to cart</button>
    </div>
  );
}