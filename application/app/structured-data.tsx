export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Lyari Medical & Psychiatric Care",
          "url": "https://www.lyarimp.com/",
          "logo": "https://www.lyarimp.com/assets/images/logo.png",
          "image": "https://www.lyarimp.com/assets/images/logo.png",
          "sameAs": [
            "https://facebook.com/yourpage",
            "https://instagram.com/yourpage"
          ]
        }),
      }}
    />
  );
}
