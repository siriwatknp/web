/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import React from 'react'

export function ResetCss() {
  return (
    <style>
      {String(`body {
      background: transparent;
    }
  `)}
    </style>
  )
}
