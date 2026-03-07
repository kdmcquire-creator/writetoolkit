'use client';




import React from 'react';
import { getAffiliateOffers, AffiliatePlacement } from '../config/affiliateLinks';




interface AffiliateBlockProps {
  placement: AffiliatePlacement;
  toolSlug?: string;
}




const AffiliateBlock: React.FC<AffiliateBlockProps> = ({ placement, toolSlug }) => {
  const offers = getAffiliateOffers(placement, toolSlug);




  if (!offers || offers.length === 0) {
    return null;
  }




  return (
    <div className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-900">Recommended</h3>
        <span className="text-xs text-blue-600 font-medium px-2 py-1 bg-blue-100 rounded">Partner Offer</span>
      </div>
      
      <div className="grid gap-4">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h4 className="font-bold text-gray-900">{offer.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            <a 
              href={offer.url} 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {offer.cta}
