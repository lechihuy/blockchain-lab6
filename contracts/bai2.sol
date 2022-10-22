// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai2 {
    function execute(int a, int b, int c) public pure returns (int[3] memory) {
        int[3] memory data;
        
        if (a <= b && b <= c) {
            data = [a, b, c];
        } else if (a <= c && c <= b) {
            data = [a, c, b];
        } else if (b <= a && a <= c) {
            data = [b, a, c];
        } else if (b <= c && c <= a) {
            data = [b, c, a];
        } else if (c <= b && b <= a) {
            data = [c, b, a];
        } else if (c <= a && a <= b) {
            data = [c, a, b];
        }

        return data;
    }
}