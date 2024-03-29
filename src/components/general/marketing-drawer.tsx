/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import { navigationStyles } from '@app/styles/navigation'
import { strings } from '@app-strings'
import { NavBarTitle, MarketingNavMenu } from './navigation'
import { SearchBar } from './searchbar'
import { Link } from './link'
import { NavBar } from './navbar'
import { Footer } from './footer'
import { CtaProfessionalSupportButton } from '../cta'

export function MarketingDrawer({
  children,
  initClosed,
  renderCtaSearch,
  title,
  navPosition,
  maxWidth,
  footerSpacing,
}: any) {
  const classes = navigationStyles()

  return (
    <Fragment>
      <NavBar
        position={navPosition}
        marketing
        className={classes.appBar}
        marketingLinks={
          <MarketingNavMenu
            home={`/${String(title).toLowerCase()}`}
            className={classes.horizontal}
            registerClassName={classes.register}
            classHiddenMobile={classes.classHiddenMobile}
          />
        }
      >
        <div className={classes.navContainer}>
          <NavBarTitle
            title={strings.appName}
            href='/'
            component={Link}
            marketing
          />
          {renderCtaSearch ? (
            <div
              style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}
            >
              <SearchBar placeholder={'Enter website url...'} noWidth cta />
            </div>
          ) : null}
        </div>
      </NavBar>
      <main className={initClosed ? '' : classes.content}>
        {initClosed ? (
          children
        ) : (
          <Container maxWidth={maxWidth}>
            <CtaProfessionalSupportButton home={title === 'Consulting'} />
            {children}
          </Container>
        )}
      </main>
      {initClosed ? null : <Footer footerSpacing={footerSpacing} />}
    </Fragment>
  )
}
