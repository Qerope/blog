---
title: Small MCP servers
date: 2025-02-20
tags: [mcp, typescript]
---
An MCP server is a small program that exposes tools and resources to a model
client. I wrote a notes server and a read-only SQL server mostly to see what
clients do with them. Two things to get right early: validate every path so a
tool cannot read outside its directory, and make the SQL tool refuse
anything that is not a SELECT, even on a read-only connection.
