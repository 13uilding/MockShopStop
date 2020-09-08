package com.infosys.Checkout.model;

import lombok.*;

@Getter @Setter
public class WeightProduct extends Product{

//    String barCode = "";
//    String productId = "";
//    Double price = 0.0;
    Double weight = 0.0;
    Double pricePerWeight = 0.0;

    public Double getPrice() {
        return weight * pricePerWeight;
    }

    public WeightProduct(String productId) {
        super.productId = productId;
    }

    public WeightProduct() {};

}
