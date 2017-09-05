---
layout: default
title: Soil moisture sensor with an Arduino
tags: [arduino, electronics]
---
The office plant keeps dying, so I built a monitor: a resistive soil probe on
A0, an LED on pin 13, and some averaging in the sketch. Two things I learned:
the probes corrode in a few weeks if you leave them powered, so switch the
power from a digital pin; and raw readings drift with temperature, so I
calibrate with the probe in air and in water instead of trusting the numbers
from the tutorial.

Code: [arduino-plant-monitor](https://github.com/qerope/arduino-plant-monitor)
