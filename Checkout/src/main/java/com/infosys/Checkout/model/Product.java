package com.infosys.Checkout.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public abstract class Product {

    String barCode;
    String productId;
    Double price;
    String image;
    static int quantity = 0;

    // Some products will have weight
    // That changes the price method
    // Integer quantity = 0;

//    boolean equals();
}
