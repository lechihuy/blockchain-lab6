// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai1 {
    function execute(int x, int y) public pure returns (int sum, int subtract, int mod, int integer) {
        sum = x + y;
        subtract = x - y;
        mod = x % y;
        integer = x - mod;
    }
}