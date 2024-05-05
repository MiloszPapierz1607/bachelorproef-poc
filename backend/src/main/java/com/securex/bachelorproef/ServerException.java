package com.securex.bachelorproef;

public class ServerException extends  RuntimeException{

    public ServerException() {
        super("server 500+ error");
    }
}
