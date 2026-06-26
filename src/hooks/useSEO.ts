import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalPath?: string;
}

export function useSEO({
  title,
  description,
  keywords = "luxury perfumes, premium fragrances, long-lasting perfumes, perfume collection, luxury fragrance brand, women's perfumes, men's perfumes",
  ogType = 'website',
  ogImage = '/src/assets/images/veloura_hero_fixed_1782037649382.jpg',
  canonicalPath
}: SEOProps) {
  useEffect(() => {
    // 1. Title tag
    document.title = title;

    // Helper function to update or create meta tags
    const updateOrCreateMeta = (nameOrProperty: string, contentValue: string, isProperty = false) => {
      const selector = isProperty 
        ? `meta[property="${nameOrProperty}"]` 
        : `meta[name="${nameOrProperty}"]`;
      
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', nameOrProperty);
        } else {
          element.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Meta description and keywords
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);

    // 3. Open Graph social tags
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:type', ogType, true);
    
    const currentUrl = window.location.href;
    updateOrCreateMeta('og:url', currentUrl, true);
    updateOrCreateMeta('og:image', window.location.origin + ogImage, true);

    // 4. Twitter tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', window.location.origin + ogImage);

    // 5. Canonical link tag
    const canonicalUrl = canonicalPath 
      ? window.location.origin + canonicalPath 
      : currentUrl.split('?')[0]; // strip query params by default for cleaner indexing

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, ogType, ogImage, canonicalPath]);
}
