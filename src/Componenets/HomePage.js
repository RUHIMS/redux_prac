import Samsung from '../Images/Samsung.jpg';
export const HomePage = (props) =>{
    console.log('propsdata',props);
   const handleButtonClick = () =>{
       const cardItem = {
           id: 1,
           name: 'Samsung Galaxy',
           price: 16000
       }
    props.addItems(cardItem)
   }
   const handleButtonClickRemove = () =>{
       console.log('remove')
    props.removeFromCart();
}

    return(
        <div>
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
            <div className ="button-wrapper">
                <button onClick = {handleButtonClick}>Add to cart</button>
                <button style ={{position: 'relative', left:'10px'}} onClick = {handleButtonClickRemove}>Remove</button>
            </div>

        </div>
    )
}