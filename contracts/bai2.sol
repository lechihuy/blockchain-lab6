//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai2 {
    function execute(int n1, int n2, int n3, int n4, int n5) public pure returns (bool) {
        return n1 == n5 && n2 == n4;
    }
}