// Copyright (c) 2023 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Religion-RST/sw.js", {
    scope: "/Religion-RST/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume = 2
  // output
  document.getElementById("volume").innerHTML = "Volume is: " + volume + "mm³"
}
