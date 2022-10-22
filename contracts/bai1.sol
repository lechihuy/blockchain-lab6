// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai1 {
    function execute(uint x, uint y) public pure returns (uint sum, uint multipy, uint mod, uint integer) {
        sum = x + y;
        multipy = x * y;
        mod = x % y;
        integer = x - mod;
    }
}