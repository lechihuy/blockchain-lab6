//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai1 {
    function execute(bytes1 b1, bytes1 b2, bytes1 b3, bytes1 b4, bytes1 b5) public pure returns (bytes1) {
        bytes1[5] memory data = [b1, b2, b3, b4, b5];
        bytes1 max = b1;

        for (uint i = 0; i < data.length; i++) {
            if (data[i] > max) {
                max = data[i];
            }
        }

        return max;
    } 
}