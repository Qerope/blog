---
layout: default
title: Writing an NES emulator, part 1: the CPU
tags: [emulation, c++]
---
The 6502 is a good first CPU to emulate. 56 instructions, 13 addressing modes,
three registers. The trick that made debugging bearable was nestest: it ships
with a log of the expected CPU state after every instruction, so you diff
your trace against it and the first mismatching line tells you which opcode is
wrong.
