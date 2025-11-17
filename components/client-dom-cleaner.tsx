'use client';
import { useEffect } from 'react';

export default function ClientDomCleaner() {
  useEffect(() => {
    // Remove atributos injetados por extensões que causam hydration mismatch
    const attrsToRemove = [
      'bis_skin_checked',
      '__processed_',
      'bis_register'
    ];
    document.querySelectorAll('*').forEach(el => {
      attrsToRemove.forEach(prefix => {
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith(prefix)) {
            el.removeAttribute(attr.name);
          }
        });
      });
    });
  }, []);
  return null;
}