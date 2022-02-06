var cart = null;// === Creation of Schema ===

module.exports = class Cart {
    // What is a static? Static basically allow the model Cart to invoke directly the method. In this case it would be save(item) and getCart()
    static save(item){
       
        if (cart) { // If there is something in the cart

            // findIndex takes a callback function, in this case we want to find the same item id. 
            var existingItemIndex = cart.items.findIndex((i) => {
                i.id == item.id
            })

            if (existingItemIndex > 0){ // exists
                const existingItem = cart.items[existingProduct];
                existingItem.quantity += 1;
                cart.totalPrice += existingItem.price;

            } else{ // Item does not exist in items
                item.quantity = 1;
                cart.items.push(item);
                cart.totalPrice += item.price;
            }

        } else{
            // Intialisation of cart variable, when something is first being added
            cart ={items: [], totalPrice: 0}
            item.quantity = 1;
            cart.items.push(item)
            cart.totalPrice = item.price
        }
    }
    static getCart() {
        return cart; 
    }
}