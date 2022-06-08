---
title: "Writing an NES emulator, part 1: the CPU"
date: 2018-03-05
tags: [emulation, c++]
---
The 6502 is a good first CPU to emulate. The trick that made debugging
bearable was nestest: it ships with a log of the expected CPU state after
every instruction, so you diff your trace against it.
