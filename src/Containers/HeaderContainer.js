import { connect } from 'react-redux';
import { Header } from '../Componenets/Header';

const mapStateToProps = (state) =>{

    return {
        cartItems : state.cartItems?.cardData
    }
}

export default connect(mapStateToProps)(Header);