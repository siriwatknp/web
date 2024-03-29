/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { strings } from '@app-strings'
import { Screenshot } from '../general'
import { SectionHeading } from '../text'

const useStyles = makeStyles((theme: any) => ({
  container: {
    padding: theme.spacing(2),
    display: 'inline-flex',
    maxWidth: '95vw',
    maxHeight: '75vh',
    overflowY: 'hidden',
    overflowX: 'scroll',
  },
  root: {
    paddingTop: '12%',
    paddingBottom: '12%',
    width: 'calc(100% - 3px)',
    display: 'block',
  },
}))

function MarketingWebsites({ websites }: any) {
  const { container, root } = useStyles()

  if (!websites?.length) {
    return null
  }

  return (
    <section className={root}>
      <SectionHeading>{strings.usersUsing}</SectionHeading>
      <Typography variant='h6' component='h4' gutterBottom>
        Examples of some websites tested with A11yWatch
      </Typography>
      <div className={container}>
        {websites.map(
          ({ screenshotStill, screenshot, url }: any, i: number) => {
            const ss = screenshotStill ?? screenshot
            return ss ? (
              <Screenshot
                url={url}
                src={ss}
                width={480}
                height={500}
                resetMargin
                key={i}
              />
            ) : null
          }
        )}
      </div>
    </section>
  )
}

export { MarketingWebsites }
