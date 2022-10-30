// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai6 {
    function execute(uint h) public pure returns (uint ws, uint ds, uint hs) {
        ws = h / (24 * 7);
        h %= 24 * 7;
        ds = h / 24;
        h %= 24;
        hs = h;
    }
}