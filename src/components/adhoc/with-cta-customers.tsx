/*
 * LICENSE file in the root directory of this source tree.
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 **/
/* eslint-disable */
import dynamic from 'next/dynamic'
import { CustomersSkeleton } from '../placeholders'

export const WithCtaCustomers = dynamic(
  () =>
    import('../cta/cta-customers').then(
      ({ CtaCustomers }: { CtaCustomers: React.ReactNode }) => CtaCustomers
    ) as any,
  {
    ssr: false,
    loading: () => <CustomersSkeleton />,
  }
)

WithCtaCustomers.displayName = 'WithCtaCustomers'
