import {connect} from 'react-redux';
import { HomePage } from '../Componenets/HomePage';
import {addTOCart, removeFromCart} from '../Services/Actions';

const mapDispatchToProps = (dispatch) => {

    return {
        addItems : (data) => dispatch(addTOCart(data)),
        removeFromCart: () => dispatch(removeFromCart())
    }

}

const mapStateToProps = (state) =>{
    return {
        cartItems : state.cartItems?.cardData
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
