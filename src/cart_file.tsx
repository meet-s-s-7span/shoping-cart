import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addValueCart, removeValueCart } from './componenets/action';

interface CartFileProps {}

const CartFile = (props: CartFileProps) => {
    const dispatch = useDispatch();
    const cartValue = useSelector((state)=>state.reducer.cartItems);
    // const totalCartAmount = useSelector((state) =>state.reducer.totalCartAmount);
    // const [cartItems, setCartItems] = React.useState([]); 
    // const [shouldShow, setShouldShow] = React.useState(false);

    const productsList = [
        { id: 1, name: 'iPhone 14 Pro', price: 1000000 },
        { id: 2, name: 'iPhone 8 Pro', price: 50000 },
        { id: 3, name: 'iPhone 9 Pro', price: 80000 },
    ];

    const handleAddToCart = (cartItems) => {
        dispatch(addValueCart(cartItems));
        console.log("updated cart:"+cartValue)
        // setCartItems([...cartItems, itemId]);
        // setShouldShow(!shouldShow)
      //   if (!shouldShow && cartValue === 0) {
      //     setShouldShow(true); // Toggle shouldShow state to true if it's false
      // }
    //   let totalprice = 0;
    //   for (let i = 0; i < cartValue.length; i++) {
    //     //   console.log("totallll"+cartValue[i].price);
          
    //        totalprice = totalprice + cartValue[i].price;
          
    //   }
    //   console.log("price of cart"+totalprice);
    

      for (let i = 0; i < cartValue.length; i++) {
        console.log(cartValue[i]);
        
        // if (cartValue[i] !== cartValue) {
        //   console.log("updated cart:"+cartValue[i])
        // //   dispatch(removeValueCart(cartValue[i]));
        // }
        // if (cartValue[i].id === cartValue.id) {
        //   console.log("already in cart"+cartValue);
        // }
        //if item alredy exists then remove from cart item
        // if (cartValue[i].id === cartItems.id) {
        //   console.log("already in cart"+cartValue[i]);
        //   dispatch(removeValueCart(cartValue[i]));
        //   console.log("After---updated cart:"+cartValue)
        // }
      }
      

    };

    const handleRemoveFromCart = (cartItems) => {
    //            const removedItem = dispatch(removeValueCart(cartItems)); // Dispatch action to remove item from cart
    // console.log("Removed item:", removedItem); // Print the removed item for debugging
    // console.log("Cart after removal:", cartValue); 
        const updatedCart = cartValue.filter(item => item.id !== cartItems.id);
        console.log("handelll"+updatedCart);
    //    const updated= cartItems.filter(id => id !== itemId);
        // console.log("updatedddddd"+updated);
        dispatch(removeValueCart(cartItems));
        // console.log("remove dddd"+removeddd);
        console.log("removed from item cart:"+cartValue);
        //print total cart prices with for loop
        // let totalprice = 0;
        // for (let i = 0; i < cartValue.length; i++) {
        //     console.log("totallll"+cartValue[i].price);
            
        //      totalprice = totalprice + cartValue[i].price;
            
        // }
        // console.log("ttttpppppp"+totalprice);
        // let totalPrice = 0;
        // cartItems.forEach(item => {
        //     totalPrice += item.price;
        // });
        // console.log("Total price of cart:", totalPrice);
        
    //     let totalprice = 0;
    //   for (let i = 0; i < cartValue.length; i++) {
    //     //   console.log("totallll"+cartValue[i].price);
          
    //        totalprice = totalprice + cartValue[i].price;
          
    //   }
    //   console.log("price of cart"+totalprice);
    //   {
    //     <View>
    //         <Text>Total price of cart: {totalprice}</Text>
    //     </View>
    //   }

        // for (let i = 0; i < cartValue.length; i++) {
        //     console.log("removeded"+cartValue[i]);
        // }
        // setCartItems(cartItems.filter(id => id !== itemId));
        // setShouldShow(shouldShow)

        //remove item from cart
        
        

    };

    // const isItemInCart = (itemId) => cartItems.includes(itemId);

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartValue.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice;
    };

    

    
    return (
        <View style={styles.container}>
            <Text style={{textAlign:"right",fontSize:50,paddingRight:30}}>{cartValue.length}</Text>
            {/* {cartValue.map((item, index) => (
       
            <Text>{item.name}</Text>
            
        
    ))} */}
           
            <FlatList data={productsList} renderItem={({ item }) => (
                <View>
                
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    
                    {/* {
                        isItemInCart(item.id) 
                        ? 
                        <Button title='Remove From Cart' onPress={() => handleRemoveFromCart(item.id)} /> :
                        <Button title='Add to Cart' onPress={() => handleAddToCart(item.id)} />
                    } */}

<Button
                        title={cartValue.some(cartItem => cartItem.id === item.id) ? 'Remove From Cart' : 'Add to Cart'}
                        onPress={() => cartValue.some(cartItem => cartItem.id === item.id) ? handleRemoveFromCart(item) : handleAddToCart(item)}
                    />
                     {/* <Button title={'Add to Cart'} onPress={() => handleAddToCart(item)} /> */}
                     {/* <Button title='Add to Cart' onPress={() => handleAddToCart({name: item.name, id: item.id, price: item.price})} /> */}
                     {/* <Button title='Add to Cart' onPress={handleAddToCart.bind(this, item.name, item.id, item.price)} /> */}

                </View>
               
            )}/>


            {/* {
              shouldShow
              ?
              <Text style={{textAlign:'center'}}>Total Amount: {totalCartAmount}</Text> 
             :
             null
            } */}
             {/* <Text style={{textAlign:'center'}}>Total Amount: {totalCartAmount}</Text>  */}
             
             <Text style={{ textAlign: 'center' }}>Total Amount: {getTotalPrice()}</Text>
        
            
        </View>
    );
};

export default CartFile;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ACACAC90'
    }
});
