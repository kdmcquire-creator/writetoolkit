'use client'



import Link from 'next/link'



import type { AffiliatePlacement } from '@/config/affiliateLinks'

import getAffiliateOffers from '@/config/affiliateLinks'



export default function AffiliateBlock(props: {
  
  placement: AffiliatePlacement
  
  toolSlug?: string
  
}) {
  
  const offers = getAffiliateOffers({ placement: props.placement, toolSlug: props.toolSlug })
  

  
  if (!offers.length) return null
  

  
  return (
    
    <section className=\"my-8 rounded-xl border border-blue-100 bg-blue-50 p-6\">
    
      <div className=\"flex flex-col gap-2\">
      
        <h2 className=\"text-lg font-semibold text-gray-900\">Recommended</h2>h2>
      
        <p className=\"text-sm text-gray-700\">
        
          Disclosure: Some links may be affiliate links. If you buy through them, you may support the site at no extra cost to you.
        
        </p>p>
      
      </div>div>
    

    
      <div className=\"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2\">
      
        {offers.map((o) => (
      
          <div key={o.id} className=\"rounded-lg border border-blue-100 bg-white p-4\">
          
            <div className=\"text-sm font-semibold text-gray-900\">{o.name}</div>div>
          
            {o.disclosure ? (
            
              <div className=\"mt-1 text-xs text-gray-600\">{o.disclosure}</div>div>
            
            ) : null}
          
            <div className=\"mt-3\">
            
              <Link
                
                href={o.url}
                
                target=\"_blank\"
            
                rel=\"nofollow\"
            
                className=\"inline-block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700\"
            
              >
              
                {o.cta}
              
              </Link>Link>
            
            </div>div>
          
          </div>div>
      
        ))}
      
      </div>div>
    
    </section>section>
    
  )
    
}

</section>








