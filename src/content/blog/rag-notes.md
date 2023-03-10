---
title: Searching my notes with sqlite-vec
date: 2024-04-02
tags: [sqlite, search]
---
My notes are a few thousand markdown files and grep stopped being enough. The
first version embedded chunks through an API and kept the vectors in a numpy
file; the current one uses a local sentence-transformers model and stores
vectors in sqlite with sqlite-vec next to an FTS5 table. Neither vector search
nor keyword search alone is great, but merging the two rankings with
reciprocal rank fusion works well enough that I stopped tuning it.
