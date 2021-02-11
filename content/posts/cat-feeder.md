---
title: A cat feeder from a Pi Zero
date: 2019-08-24
tags: [raspberry-pi, python]
---
A continuous rotation servo turns an auger under a hopper. The only real
design question was how to avoid feeding twice by accident, since the web
page, the Telegram bot and the schedule can all trigger it. The answer is
boring: log every feed in sqlite and refuse if the last one was under four
hours ago, unless you say `/feed force`.
