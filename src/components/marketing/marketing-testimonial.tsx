/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { strings } from '@app-strings'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '12%',
    paddingBottom: '12%',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  bigAvatar: {
    display: 'block',
    objectFit: 'contain',
    margin: '0 auto',
    border: '4px solid white',
    minHeight: '310px',
    minWidth: '310px',
    [theme.breakpoints.down('sm')]: {
      minHeight: 150,
      minWidth: 150,
    },
  },
  title: {
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7em',
      textAlign: 'center',
    },
  },
  image: {
    backgroundColor: 'hsl(0, 0%, 90%)',
    transition: 'background-color 300ms',
  },
  subtitle: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      flex: 1,
    },
  },
}))

export function MarketingTestimonial() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={3}
        justify='center'
        className={classes.container}
      >
        <Grid item xs={12} sm={6}>
          <Avatar className={classes.bigAvatar} variant='circular'>
            <Image
              className={classes.image}
              alt={strings.testimonials[0].who}
              src='/static/img/gilbert.png'
              height={310}
              width={310}
              quality={100}
            />
          </Avatar>
        </Grid>
        <Grid item xs={12} sm={6} container>
          <div>
            <Typography
              variant='h4'
              component='h5'
              gutterBottom
              className={classes.title}
            >
              {strings.testimonials[0].title}
            </Typography>
            <Typography
              variant='subtitle1'
              component='p'
              gutterBottom
              className={classes.subtitle}
            >
              {strings.testimonials[0].who}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}
