/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import React from 'react'
import { Shape } from '@a11ywatch/ui'

export function Circle({
  className,
  children,
}: {
  className: string
  children?: any
}) {
  return (
    <Shape className={className} type={'circle'}>
      {children}
    </Shape>
  )
}
