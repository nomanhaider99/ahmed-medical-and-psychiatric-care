import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    id: 1,
    question: "What mental health services are available at Ahmed Medical Psychiatric Care?",
    answer:
      "At Ahmed Medical Psychiatric Care, we provide compassionate, evidence-based mental health services, including psychiatric evaluations, medication management, and psychotherapy. Our secure telepsychiatry and in-person sessions ensure personalized, confidential care tailored to your needs. We focus on supporting your emotional well-being, recovery, and long-term mental health.",
  },
  {
    id: 2,
    question: "How does virtual mental health treatment improve patient outcomes?",
    answer:
      "Virtual mental health treatment makes professional care accessible, convenient, and consistent, allowing patients to attend sessions from home or any private location. By reducing barriers such as travel time, childcare, or mobility issues, patients are more likely to engage regularly in therapy and follow treatment plans. Secure telepsychiatry also supports timely medication management, ongoing monitoring, and collaborative care, leading to better symptom management, improved mental well-being, and long-term recovery outcomes.",
  },
  {
    id: 3,
    question: "How do I determine whether virtual mental health services are suitable for my needs?",
    answer:
      "Virtual mental health services are ideal for individuals seeking flexible, accessible, and confidential care. If you have difficulty attending in-person visits due to travel, work, or mobility constraints, or if you prefer the comfort and privacy of your home, online sessions can be an effective option. Our providers assess each patient’s needs during an initial consultation to ensure virtual care is appropriate, safe, and tailored to your mental health goals.",
  },
  {
    id: 4,
    question: "How is my privacy protected during virtual mental health sessions?",
    answer:
      "At Ahmed Medical Psychiatric Care, your privacy and confidentiality are our top priorities. All virtual sessions are conducted through secure, HIPAA-compliant platforms, ensuring that your personal information and treatment details remain protected. Our providers follow strict privacy protocols, giving you a safe and confidential environment to discuss your mental health needs.",
  },
  {
    id: 5,
    question: "What equipment and technology are required for virtual mental health appointments?",
    answer:
      "To participate in virtual mental health sessions at Ahmed Medical Psychiatric Care, you’ll need a stable internet connection and a device with a camera and microphone, such as a smartphone, tablet, or computer. Sessions are conducted through our secure, HIPAA-compliant video platform, which is easy to use and requires no special software installation. This ensures you can connect safely and comfortably from the privacy of your home.",
  },
  {
    id: 6,
    question: "How do I schedule my first virtual appointment?",
    answer:
      "Scheduling your first virtual appointment at Ahmed Medical Psychiatric Care is simple and convenient. You can book online through our website, or call our office directly to speak with our friendly staff. During scheduling, we’ll guide you through preparing for your session and answer any questions to ensure a smooth and comfortable virtual visit.",
  },
  {
    id: 7,
    question: "Is an in-person visit required before starting online sessions?",
    answer:
      "At Ahmed Medical Psychiatric Care, an in-person visit is not required to begin virtual mental health sessions. Our providers can safely conduct initial evaluations, therapy, and medication management through secure, HIPAA-compliant telehealth platforms, ensuring you receive comprehensive care from the comfort and privacy of your home.",
  },
  {
    id: 8,
    question: "What if I have a poor internet connection?",
    answer:
      "At Ahmed Medical Psychiatric Care, we understand that reliable internet isn’t always available. If your connection is weak or unstable, our team can help troubleshoot technical issues, suggest alternative devices or connection options, or arrange a phone consultation if necessary. Our goal is to ensure you can receive consistent, uninterrupted mental health care, no matter your situation.",
  },
  {
    id: 9,
    question: "How do I join my virtual session?",
    answer:
      "Joining your virtual session at Ahmed Medical Psychiatric Care is simple and secure. Before your appointment, you will receive a link via email or text with instructions to access our HIPAA-compliant video platform. At the scheduled time, click the link, log in, and you’ll be connected directly with your provider — no special software required.",
  },
  {
    id: 10,
    question: "What should I do if I lose connection during the appointment?",
    answer:
      "If your connection is interrupted during a virtual session at Ahmed Medical Psychiatric Care, please try reconnecting using the original session link. If you are unable to reconnect, contact our office immediately by phone or email so we can resume your session or reschedule as quickly as possible. Our team is committed to ensuring your care is uninterrupted and accessible.",
  },
  {
    id: 11,
    question: "How can I check my telehealth coverage with my insurance?",
    answer:
      "To confirm telehealth coverage, contact your insurance provider directly using the customer service number on your card. You can also provide our office with your insurance details, and our team at Ahmed Medical Psychiatric Care can help verify benefits, coverage limits, and any copays to ensure a smooth billing process before your virtual appointment.",
  },
  {
    id: 12,
    question: "How often should I schedule follow-up sessions?",
    answer:
      "The frequency of follow-up sessions at Ahmed Medical Psychiatric Care depends on your individual treatment plan, needs, and progress. Typically, follow-ups may be scheduled weekly, biweekly, or monthly, and our providers will work with you to determine the best schedule to ensure continuous support, symptom monitoring, and treatment adjustments for optimal mental health outcomes.",
  },
];


const FAQs = () => {
    return (
        <div className="w-full flex flex-col items-center gap-5 md:px-20 px-4 md:py-10 py-5">
            <h1 className="lg:text-[3rem] text-[2rem] font-semibold leading-none text-vivid-azure">Frequently Asked Questions</h1>
            <div className="md:w-3/4 w-full">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="1"
                >
                    {
                        faqsData.map((item) => (
                            <AccordionItem 
                                value={String(item.id)} 
                                key={item.id}
                                className="cursor-pointer border-b-[1px] border-vivid-azure/15"
                            >
                                <AccordionTrigger className="text-dark-gray text-lg font-semibold">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-zinc-700 text-lg">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs