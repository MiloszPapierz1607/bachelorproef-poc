package com.securex.bachelorproef;

public class ClientException extends RuntimeException{

    public ClientException() {
        super("Client 400 -> 499 error");
    }

}
