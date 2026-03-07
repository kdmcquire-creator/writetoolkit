export type AffiliatePlacement = 'tool-sidebar' | 'tool-bottom' | 'tools-list' | 'toolsIndex' | 'toolPage';


export const affiliateLinks = [
  {
    id: 'anyword',
    name: 'Anyword',
    url: 'https://anyword.com/?fpr=shane74',
    description: 'Anyword is an AI writing platform that helps you create high-performing copy for your marketing channels.',
    cta: 'Try Anyword for Free',
    logo: '/images/affiliates/anyword.png',
    disclosure: 'Affiliate partner'
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    url: 'https://writesonic.com/?via=shane-mitchell',
    description: 'Writesonic is an AI writing and image generation platform that helps you create high-quality content in seconds.',
    cta: 'Get Started with Writesonic',
    logo: '/images/affiliates/writesonic.png',
    disclosure: 'Affiliate partner'
  }
];


export function getAffiliateOffers({ placement, toolSlug }: { placement: AffiliatePlacement; toolSlug?: string }) {
  return affiliateLinks;
}
