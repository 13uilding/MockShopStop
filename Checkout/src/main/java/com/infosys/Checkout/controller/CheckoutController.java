package com.infosys.Checkout.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.env.Environment;

@RestController
public class CheckoutController {

    @Autowired
    private Environment env;

    @GetMapping("/port")
    public String getPort() {
        String port = env.getProperty("local.server.port");
        return "Hello, this came from port " + port;
    }

    @GetMapping
    public String helloWorld() {
        return "Hello World";
    }


}
