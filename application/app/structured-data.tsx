export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Ahmed Medical & Psychiatric Care",
          "url": "https://www.ahmedmedicalpsychiatriccare.com/",
          "logo": "https://www.ahmedmedicalpsychiatriccare.com/assets/images/logo.png",
          "image": "https://www.ahmedmedicalpsychiatriccare.com/assets/images/logo.png",
          "sameAs": [
            "https://facebook.com/yourpage",
            "https://instagram.com/yourpage"
          ]
        }),
      }}
    />
  );
}
