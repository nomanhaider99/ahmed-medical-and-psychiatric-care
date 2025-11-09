import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
    {
        id: 1,
        question: "What is mental health services do you offer?",
        answer: "We offer a range of virtual mental health services including individual therapy, group support sessions, medication management, and specialized programs for anxiety, depression, and stress."
    },
    {
        id: 2,
        question: "What are the outcomes of virtual mental health treatment?",
        answer: "Outcomes often include reduced symptoms of distress, improved coping mechanisms, better emotional regulation, and an overall increase in quality of life and well-being."
    },
    {
        id: 3,
        question: "How do I know if virtual mental health is right for me?",
        answer: "Virtual mental health is a good fit for most people, especially those seeking convenience, flexibility, and comfort. We recommend a brief initial consultation to assess your specific needs."
    },
    {
        id: 4,
        question: "Is virtual mental health confidential?",
        answer: "Yes, virtual mental health sessions are strictly confidential and compliant with all relevant privacy regulations, such as HIPAA. We use secure, encrypted platforms for all communications."
    },
    {
        id: 5,
        question: "What technology do I need for virtual mental health sessions?",
        answer: "You will need a reliable internet connection, a computer or mobile device (smartphone/tablet), a functioning microphone, and a camera. Our platform is accessible via a standard web browser or dedicated app."
    }
]

const FAQs = () => {
    return (
        <div className="w-full flex flex-col items-center gap-5 md:px-20 px-4 py-5">
            <h1 className="text-[2.2rem] font-semibold">Frequently Asked Questions</h1>
            <div className="md:w-3/4 w-full">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {
                        faqsData.map((item) => (
                            <AccordionItem 
                                value={String(item.id)} 
                                key={item.id}
                                className="cursor-pointer"
                            >
                                <AccordionTrigger className="text-vivid-azure text-lg">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-dark-gray text-lg">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs