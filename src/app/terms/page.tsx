import PageContainer from '@/components/ui/PageContainer';
import { FileText } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Ethereal Threads. These terms and conditions outline the rules and regulations for the use of Ethereal Threads' Website, located at etherealthreads.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Ethereal Threads if you do not agree to take all of the terms and conditions stated on this page."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "Unless otherwise stated, Ethereal Threads and/or its licensors own the intellectual property rights for all material on Ethereal Threads. All intellectual property rights are reserved. You may access this from Ethereal Threads for your own personal use subjected to restrictions set in these terms and conditions."
    },
    {
      title: "3. Restrictions",
      content: "You are specifically restricted from all ofthe following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website; using this Website in any way that impacts user access to this Website..."
    },
    {
      title: "4. Your Content",
      content: "In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Ethereal Threads a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media."
    },
    {
      title: "5. No warranties",
      content: "This Website is provided “as is,” with all faults, and Ethereal Threads express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you."
    },
    {
      title: "6. Limitation of liability",
      content: "In no event shall Ethereal Threads, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Ethereal Threads, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website."
    },
    {
      title: "7. Indemnification",
      content: "You hereby indemnify to the fullest extent Ethereal Threads from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms."
    },
     {
      title: "8. Governing Law &amp; Jurisdiction",
      content: "These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State/Country], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State/Country] for the resolution of any disputes."
    },
  ];

  return (
    <PageContainer>
      <div className="text-center mb-12 md:mb-16">
        <FileText className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Terms &amp; Conditions</h1>
        <p className="text-lg text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 prose prose-lg dark:prose-invert prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
