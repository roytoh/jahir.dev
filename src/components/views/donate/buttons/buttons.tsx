import Icon from '@mdi/react';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { gift } from '@/components/icons/icons';
import {
  mdiCreditCardChipOutline,
  mdiHeartOutline,
  mdiPizza,
} from '@/components/icons/mdi';

import { AmazonLink, GitHubSponsorsLink, PayPalLink } from './buttons.styles';

export const DonateButtons = () => {
  return (
    <div className={'flex flex-col gap-12 mt-16 mb-24'}>
      <Heading $as={'h2'} className={'text-lg'}>
        Donate via
      </Heading>
      <div className={'flex flex-row items-center gap-16 flex-wrap'}>
        <GitHubSponsorsLink
          href={'https://github.com/sponsors/jahirfiquitiva'}
          title={'Sponsor Jahir on GitHub'}
          data-umami-event={'Donate via GitHub Sponsors'}
        >
          <Icon path={mdiHeartOutline} size={0.9} />
          <span>GitHub Sponsors</span>
        </GitHubSponsorsLink>
        <ButtonLink
          href={'https://buymeacoffee.com/jahirfiquitiva'}
          title={'Buy Jahir a Pizza'}
          data-umami-event={'Donate via Buy me a Coffee'}
        >
          <Icon path={mdiPizza} size={0.9} className={'-rotate-12'} />
          <span>Buy me a Pizza</span>
        </ButtonLink>
        <PayPalLink
          href={'https://jahir.xyz/DonatePayPal'}
          title={'Donate to Jahir via PayPal'}
          data-umami-event={'Donate via PayPal'}
        >
          <Icon path={mdiCreditCardChipOutline} size={0.9} />
          <span>PayPal</span>
        </PayPalLink>
        <AmazonLink
          href={
            'https://www.amazon.com/hz/wishlist/ls/IEAGJXCWA83F?ref_=wl_share'
          }
          title={'Buy Jahir a gift from his Amazon Wishlist'}
          data-umami-event={'Donate buying an Amazon gift'}
        >
          <Icon path={gift} size={0.85} />
          <span>Buy gift</span>
        </AmazonLink>
      </div>
    </div>
  );
};
