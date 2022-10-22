// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai3 {
    function execute(int a, int b, int c, int d) public pure returns (int max, int min) {
        int[4] memory data = [a, b, c, d];

        max = min = a;

        for (uint i = 0; i < data.length; i++) {
            if (data[i] > max) {
                max = data[i];
            }

            if (data[i] < min) {
                min = data[i];
            }
        }
    }
}