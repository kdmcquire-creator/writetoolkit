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
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142338&url_id=902',
    description: 'Fast and secure VPN service for ultimate online privacy and security.',
    cta: 'Get NordVPN',
    logo: '/images/affiliates/nordvpn.png',
    disclosure: 'Affiliate partner'
  },
  {
    id: 'nordpass',
    name: 'NordPass',
    url: 'https://go.nordpass.io/aff_c?offer_id=488&aff_id=142338&url_id=9356',
    description: 'Secure password manager to store and manage your passwords safely.',
    cta: 'Get NordPass',
    logo: '/images/affiliates/nordpass.png',
    disclosure: 'Affiliate partner'
  },
  {
    id: 'nordprotect',
    name: 'NordProtect',
    url: 'https://go.nordprotect.net/aff_c?offer_id=973&aff_id=142338',
    description: 'NordProtect provides comprehensive identity theft protection and credit monitoring services to keep your personal data safe.',
    cta: 'Get NordProtect',
    logo: '/images/affiliates/nordprotect.png',
    disclosure: 'Affiliate partner'
  }
];




export function getAffiliateOffers({ placement, toolSlug }: { placement: AffiliatePlacement; toolSlug?: string }) {
  return affiliateLinks;
