package com.infosys.Checkout.model;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter @Setter
public class Cart {

    // Constructor
    private Cart() {};

    // Cart is a singleton
    private static Cart cart = null;
    // Fields
    private Map<String, Product> products = new HashMap<String, Product>(); // HashMap isn't thread safe
    private Map<String, Integer> quantity = new HashMap<String, Integer>(); // quantity of the products
    private boolean isCheckingOut = false;

    // Get instance of the cart
    public static Cart getInstance() {
        if (cart == null) {
            return cart = new Cart();
        }
        return cart;
    }

    // Add Product to cart
    public void addProduct(Product product) {
        // Check to see if product already in cart
        String productId = product.getProductId();
        // If product in cart call change quantity
        if (products.containsKey(productId)) {
            changeQuantityOfProduct(productId);
        }
        // If product not in cart add it
        products.put(productId, product);
        quantity.put(productId, 1);
    }
    // Remove Product from cart
    public boolean removeProduct(Product product) {
        // Check to see if product in cart
        // If it is remove it
        if (products.containsKey(product.getProductId())) {
            products.remove(product.getProductId());
            return true;
        }
        // If it isn't return false
        return false;
    }
    // Change quantity of product
    public int changeQuantityOfProduct(String productId) {
        int newQuantity = quantity.get(productId) + 1;
        quantity.put(productId, newQuantity);
        return newQuantity;
    }
    public int changeQuantityOfProduct(String productId, int newQuantity) {
        quantity.put(productId, newQuantity);
        return newQuantity;
    }
}
