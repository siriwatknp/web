/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

// import { strings } from '@app-strings'

import {
  Mood as PaidIcon,
  WhatshotOutlined as WhatsHot,
  SentimentSatisfied as FreeIcon,
} from '@material-ui/icons'

const TRUSTED_CDN = 'Secure custom autofix CDN'
const VISUAL_PLAYGROUND = 'Visual website playground'

const plans = [
  {
    title: 'Free',
    details: [
      'Monitor 1 website',
      'Daily email reports',
      '2 daily manual page scans',
      'Root domain scanned daily',
      TRUSTED_CDN,
      VISUAL_PLAYGROUND,
      'Custom scripts',
      '3 Private API request per day',
    ],
    Icon: FreeIcon,
    cost: '$0/month',
  },
  {
    title: 'Basic',
    details: [
      'Monitor up to 4 websites',
      'Daily email reports',
      '10 daily manual page scans',
      'All pages scanned daily',
      TRUSTED_CDN,
      VISUAL_PLAYGROUND,
      'Custom editable scripts',
      '100 Private API request per day',
    ],
    Icon: PaidIcon,
    cost: '$9.99/month',
  },
  {
    title: 'Premium',
    details: [
      'Monitor up to 10 websites',
      'Daily email reports',
      'Unlimited daily manual page scans',
      'All pages scanned multiple times daily',
      TRUSTED_CDN,
      VISUAL_PLAYGROUND,
      'Custom editable scripts',
      '500 Private API request per day',
    ],
    Icon: WhatsHot,
    cost: '$19.99/month',
  },
]

export const priceConfig = {
  plans,
}
