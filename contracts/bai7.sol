// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

struct Time {
    uint h;
    uint m;
    uint s;
}

contract Bai7 {
    function convertSecondsToTime(uint ss) private pure returns (uint, uint, uint) {
        uint h = ss / (60 * 60);
        ss %= 60 * 60;
        uint m = ss / 60;
        ss %= 60;
        uint s = ss;

        return (h, m, s);
    }


    function convertTimeToSecond(Time memory t) private pure returns (uint) {
        return t.h * 60 * 60 + t.m * 60 + t.s;
    }

    function execute(Time memory t1, Time memory t2) public pure returns (uint, uint, uint) {
        uint diff = convertTimeToSecond(t2) - convertTimeToSecond(t1);

        return convertSecondsToTime(diff);
    }
}