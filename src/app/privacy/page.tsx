import PageContainer from '@/components/ui/PageContainer';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support. This may include your name, email address, shipping address, phone number, and payment information. We also collect information automatically when you use our website, such as your IP address, browser type, and browsing behavior."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to: process your orders and provide customer service; personalize your shopping experience; communicate with you about products, services, and promotions; improve our website and services; prevent fraud and ensure security."
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety."
    },
    {
      title: "4. Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us. To exercise these rights, please contact us at support@etherealthreads.com."
    },
    {
      title: "6. Cookies",
      content: "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
    },
    {
      title: "7. Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes."
    },
  ];

  return (
    <PageContainer>
      <div className="text-center mb-12 md:mb-16">
        <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 prose prose-lg dark:prose-invert prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
        <p className="text-muted-foreground leading-relaxed">
            Ethereal Threads (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the etherealthreads.com website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
          </section>
        ))}
         <section>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed">
                <li>By email: <a href="mailto:privacy@etherealthreads.com" className="text-primary hover:underline">privacy@etherealthreads.com</a></li>
                <li>By visiting this page on our website: <a href="/contact" className="text-primary hover:underline">etherealthreads.com/contact</a></li>
            </ul>
        </section>
      </div>
    </PageContainer>
  );
}
