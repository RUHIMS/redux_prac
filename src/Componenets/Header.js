import Cart from '../Images/cart.jpg';

export const Header = (props) =>{

    return(
    <div className = "items-wrapper">
                <span style ={{position: 'absolute', right: '1px', top : '1%',zIndex: 1,
                borderRadius:'50%', height:'25px',width:'25px', backgroundColor:'lightgreen',
                textAlign:'center',color: 'red'}}>{props.cartItems.length}</span>
                 <img src ={Cart} alt ='cart' />
             </div>
    )
}