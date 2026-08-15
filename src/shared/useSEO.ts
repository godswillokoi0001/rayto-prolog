import { useEffect, useRef } from 'react';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Hook to dynamically update SEO meta tags for each page
 * This is crucial for single-page applications
 */
export function useSEO(metadata: SEOMetadata) {
  const metadataKey = JSON.stringify(metadata);
  const previousMetadataKey = useRef<string | null>(null);

  useEffect(() => {
    // Update page title
    document.title = metadata.title;

    // Update or create meta description
    updateMetaTag('description', metadata.description);

    // Update keywords if provided
    if (metadata.keywords) {
      updateMetaTag('keywords', metadata.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', metadata.ogTitle || metadata.title, 'property');
    updateMetaTag('og:description', metadata.ogDescription || metadata.description, 'property');
    if (metadata.ogImage) {
      updateMetaTag('og:image', metadata.ogImage, 'property');
    }
    if (metadata.ogUrl) {
      updateMetaTag('og:url', metadata.ogUrl, 'property');
    }

    // Update Twitter tags
    updateMetaTag('twitter:title', metadata.twitterTitle || metadata.title);
    updateMetaTag('twitter:description', metadata.twitterDescription || metadata.description);
    if (metadata.twitterImage) {
      updateMetaTag('twitter:image', metadata.twitterImage);
    }

    // Update or create canonical link
    updateCanonical(metadata.canonical || window.location.href);

    // Update structured data if provided
    if (metadata.structuredData) {
      updateStructuredData(metadata.structuredData);
    }

    if (previousMetadataKey.current !== metadataKey) {
      previousMetadataKey.current = metadataKey;
      // Scroll to top only when the actual page metadata changes.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [metadataKey]);
}

/**
 * Helper function to update or create meta tags
 */
function updateMetaTag(
  name: string,
  content: string,
  attributeType: 'name' | 'property' = 'name'
) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attributeType}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeType, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

/**
 * Helper function to update canonical link
 */
function updateCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * Helper function to update structured data (JSON-LD)
 */
function updateStructuredData(data: Record<string, unknown>) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]:not([data-app-meta])');
  if (existingScript && !existingScript.hasAttribute('data-app-meta')) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-app-meta', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}