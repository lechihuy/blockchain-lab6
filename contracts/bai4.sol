// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

struct Factor {
    int a;
    int b;
    int c;
}

contract Bai4 {
    function execute(Factor memory m, Factor memory n) public pure returns (int x, int y, int D, int dx, int dy) {
        D = m.a * n.b - n.a * m.b;
        dx = m.c * n.b - n.c * m.b;
        dy = m.a * n.c - n.a * m.c;

        if (D != 0) {
            x = dx / D;
            y = dy / D;
        }
    }
}