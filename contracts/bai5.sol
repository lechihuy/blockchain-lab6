// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bai5 {
    function isLeapYear(uint year) public pure returns (bool) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0; 
    }

    function execute(uint day, uint month, uint year) public pure returns (uint, uint, uint)
    {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            day = (day == 31) ? 1 : day + 1;
        } else if (month == 2) {
            day = (isLeapYear(year) && day == 29 || !isLeapYear(year) && day == 28) ? 1 : day + 1;
        } else {
            day = (day == 30) ? 1 : day + 1;
        }

        if (day == 1) {
            month = month + 1;
        }

        if (month == 13) {
            month = 1;
            year = year + 1;
        }

        return (day, month, year);
    }
}