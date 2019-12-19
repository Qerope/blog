---
title: Moving the homelab to k3s
date: 2020-08-30
tags: [kubernetes, homelab]
---
Three Raspberry Pis and an old NUC. k3s was a ten minute install; the part
that took the weekend was storage. Longhorn works but a Pi 3 is too slow to
be a replica, so volumes are restricted to the NUC and the two Pi 4s. MetalLB
in layer 2 mode handles load balancer IPs, cert-manager with a DNS-01 solver
gets certificates without opening ports.
