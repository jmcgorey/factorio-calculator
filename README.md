# factorio-calculator

## Overview 

A _very_ work-in-progress calculator for playing the game [Factorio](https://store.steampowered.com/app/427520/Factorio/).  It is meant to help you calcate a handful of values, such as:
- how many assembling machines you need to produce `X` items/second
- how many mining drills you need to fill `Y` number of belts

## Installation & Build

Clone down the repository, then run `npm install` to install the needed `node_modules`.  After that, run `tsc` to transpile the project to Javascript.  All of the JS files that get built will be placed in the `/dist` directory.

From there, you can (currently) run a file with `node dist/<filename>.js` and read the console output for your results.

## TODO
- Make it _far_ easier to run calculations. Ideally, there would be a UI where you could calculate in real time, without having to recompile
- Add ability to save calculations & results for later (maybe using IndexedDB)
- Build out the recipet library
- Set it up so you can calculate the whole tree of dependencies from one end-product, or just focus on the current level.
