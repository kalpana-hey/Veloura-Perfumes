import { useEffect } from 'react';

export function useJsonLdSchema(schemaObj: Record<string, any> | Record<string, any>[]) {
  useEffect(() => {
    // Generate a unique ID to identify our schema script tag
    const scriptId = 'veloura-ld-schema';
    
    // Remove existing schema scripts to avoid duplicates
    const existingScripts = document.querySelectorAll(`script#${scriptId}`);
    existingScripts.forEach(script => script.remove());

    // Create and append the new structured data script tag
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaObj);
    document.head.appendChild(script);

    return () => {
      // Clean up on component unmount
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schemaObj]);
}
