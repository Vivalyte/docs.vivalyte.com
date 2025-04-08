---
id: dmx-address-chart
title: DMX Addressing Chart
sidebar_label: DMX Addressing
---

# DMX Addressing Cheat Sheet

Use this chart to set the start address of your DMX decoder using DIP switches.

| DIP Switch | Binary Value | Address Offset |
|------------|--------------|----------------|
| 1          | 1            | 1              |
| 2          | 2            | 2              |
| 3          | 4            | 4              |
| 4          | 8            | 8              |
| 5          | 16           | 16             |
| 6          | 32           | 32             |
| 7          | 64           | 64             |
| 8          | 128          | 128            |
| 9          | 256          | 256            |
| 10         | 512          | 512            |

> ✳️ Combine values by switching multiple DIP switches ON.

**Example:**
To set address 37 → ON switches: 32 + 4 + 1 → DIP 6, 3, 1
