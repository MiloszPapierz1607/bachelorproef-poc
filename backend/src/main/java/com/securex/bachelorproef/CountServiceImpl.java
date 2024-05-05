package com.securex.bachelorproef;

import org.springframework.stereotype.Service;

@Service
public class CountServiceImpl implements CountService {
    private int count = 0;

    @Override
    public int getCounts() {
        count++;
        return count;
    }

    @Override
    public int getCountsDelay() {
        try {
            Thread.sleep(2000);

        } catch (InterruptedException e) {
            System.err.format("IOException: %s%n",e);
        }
        count++;
        return count;
    }

    @Override
    public int getCountsClientError() {
        if (count >= 0) {
            throw new ClientException();
        }

        return 0;
    }

    @Override
    public int getCountsServerError() {
        if (count >= 0) {
            throw new ServerException();
        }

        return 0;
    }
}
