import Samsung from '../Images/Samsung.jpg';
import Cart from '../Images/cart.jpg';
export const HomePage = () =>{
    return(
        <div>
            <div className = "items-wrapper">
                 <img src ={Cart} alt ='cart' />
             </div>
             <h4 style ={{'textAlign': 'center'}}>This is Home Page</h4>
            <div className ="cart-wrapper" >
               <div className = "img-wrapper">
                   <img src ={Samsung} alt = {'Samsung Mobile'} />
                   </div>
                   <div className = "text-wrapper">
                       <span>Samsung Galaxy</span>
                       <span>Price : Rs 16000</span>
                       </div>
            </div>
            <div class ="button-wrapper">
                <button>Add to cart</button>
            </div>

        </div>
    )
}