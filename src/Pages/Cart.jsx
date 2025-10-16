import useStore from "../store/CartStore.js";
import { toast } from "react-toastify";
 import notificationsound from '/sound/removedSound.wav'
function Cart() {
  //toastify
  const Removenotify = () =>{
    toast("Removed From cart successfully"
  , {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: "light",
    } 
    )
      playSound();
  }

  function playSound(){
 const audio =new Audio(notificationsound)
 audio.play();
  }
 
const Clearnotify = () =>{
    toast("All items Removed"
  , {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: "light",
    } 
    )
      playSound();
  }

  const { clearCart, removeItem, cartItems, totalPrice } = useStore();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((data, id) => (
            <div
              key={id}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-medium text-lg">{data.title}</p>
                <p className="text-gray-600">${totalPrice}</p>
              </div>
              <button
                onClick={() => {
                  removeItem(data.id);
                  Removenotify();
                }}
                className="bg-black text-white p-2 m-1 "
              >
                {" "}
                Remove
              </button>
            </div>
          ))}{" "}
          <button
            onClick={() => {
              clearCart();
              Clearnotify();
            }}
            className="bg-black text-white p-4 m-2 "
          >
            {" "}
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
