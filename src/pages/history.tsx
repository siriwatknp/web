/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import React from 'react'
import { Container } from '@material-ui/core'
import {
  List,
  FormDialog,
  MiniPlayer,
  PageTitle,
  LinearBottom,
  Drawer,
} from '@app/components/general'
import { Box } from '@a11ywatch/ui'
import { historyData, useSearchFilter } from '@app/data'
import { filterSort } from '@app/lib'
import { withApollo } from '@app/apollo'
import { WithHydrate } from '@app/components/adhoc'
import { metaSetter } from '@app/utils'
import type { PageProps } from '@app/types'

const History = ({ name }: PageProps) => {
  const { data, loading, refetch, crawlWebsite } = historyData(true)
  const { search } = useSearchFilter()
  const listData = filterSort(data, search)

  return (
    <WithHydrate>
      <Drawer title={name}>
        <Container maxWidth='xl'>
          <Box>
            <PageTitle title={'All Past Websites'} />
            <List
              data={listData}
              loading={loading}
              refetch={refetch}
              crawlWebsite={crawlWebsite}
              BottomButton={FormDialog}
              history
              emptyHeaderTitle='No websites found'
              emptyHeaderSubTitle='Websites will appear here once you remove them from the dashboard'
            />
          </Box>
        </Container>
        <MiniPlayer />
      </Drawer>
      <LinearBottom loading={loading} />
    </WithHydrate>
  )
}

export default withApollo(metaSetter({ History }))
