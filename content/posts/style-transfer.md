---
title: Neural style transfer with TensorFlow
date: 2018-03-20
tags: [ml, tensorflow]
---
Implemented the Gatys et al. paper on top of the pretrained VGG19. The part
that took longest was the weights: the matconvnet file stores kernels as
[width, height, in, out] and TensorFlow wants [height, width, in, out], so
everything came out transposed and looked like TV static until I swapped them.
L-BFGS converges in a few hundred iterations; Adam needs a lot more and a
careful learning rate.
