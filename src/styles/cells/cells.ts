/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import { makeStyles, Theme } from '@material-ui/core/styles'

export const cellStyles = makeStyles((theme: Theme) => {
  return {
    toggleAlert: {
      flex: 1,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    alert: {
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.primary.main,
      },
    },
    topList: {
      paddingLeft: 20,
      [theme.breakpoints.down(420)]: {
        paddingLeft: 15,
      },
    },
  }
})
