package com.securex.bachelorproef;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/counts")
public class CountController {

    @Autowired
    private CountService countService;

    @GetMapping
    public ResponseEntity<Integer> getCounts() {
        return ResponseEntity.ok().body(countService.getCounts());
    }

    @GetMapping("delay")
    public ResponseEntity<Integer> getCountsDelay() {
        return ResponseEntity.ok().body(countService.getCountsDelay());
    }

    @GetMapping("clienterror")
    public ResponseEntity<Integer> getCountsClientError() {
        return ResponseEntity.ok().body(countService.getCountsClientError());
    }

    @GetMapping("servererror")
    public ResponseEntity<Integer> getCountsServerError() {
        return ResponseEntity.ok().body(countService.getCountsServerError());
    }
}
