# CS1 Intergalactic Space Unit
____

## Quick Start (Detailed Instructions to Come)

🍎 Remix this project.

🍎 Add an **ADMIN_KEY** in **.env**

🍎 For the admin account, login with admin and your ADMIN_KEY.

🍎 Add additional accounts through the client console.
```js
CS1.socket.emit('add-user',{key:[ADMIN_KEY],name:[new username],pw:[new user pw]})
```
🍎 After changing any src/ files, in the Tools/Console run:
```sh
pnpm run build
refresh
```


## Overview

🍎 Based upon [A-Frame version 0.9](https://aframe.io/docs/0.9.0/introduction/).
  
🍎 Using [navigation mesh](https://www.donmccurdy.com/2017/08/20/creating-a-nav-mesh-for-a-webvr-scene/) based pathfinding.
  
🍎 Integrated with [D3.js](https://d3js.org/) for data visualization.
- Make examples. (TODO)
  
🍎 Enables easy use of shaders created with [Shader Frog](https://shaderfrog.com/).

🍎 JS, CSS, and JSON bundling, minification, and uglifying with [Rollup](https://rollupjs.org/guide/en).

🍎 Installable as a Progressive Web App [(PWA)](https://developers.google.com/web/progressive-web-apps/).

🍎 **Heads Up Display (HUD) system** including:
- **RingDial** data visualization widget
- **Meter** data visualization widget
- **GUI Widgets** (TODO)

🍎 Collectibiles System
- Offline collection
- Online collection

🍎 [A-Frame Effects](https://github.com/wizgrav/aframe-effects)
- [bloom](https://en.wikipedia.org/wiki/Bloom_(shader_effect))
- glitch
- [godrays](https://en.wikipedia.org/wiki/Crepuscular_rays)
- [fxaa](https://en.wikipedia.org/wiki/Fast_approximate_anti-aliasing)

🍎 Particles System
- JSON particles bundling (TODO)

🍎 BGM System
- via SoundCloud (TODO)

🍎 Player Component
- move player logic and state from game component to player component (TODO)
    
    
