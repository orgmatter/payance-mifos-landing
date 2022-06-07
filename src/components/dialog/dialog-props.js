import GetQuoteForm from "./components/forms/get-quotes-form";
import RequestDemoForm from "./components/forms/request-demo-form";
import SendEmailForm from "./components/forms/send-email-form";
import ViewServices from "./components/view-services";

export const dialogProps = {
    forms: [
        {
            componentType: "request-demo",
            title: `<span class="inline-color-span">REQUEST</span> A DEMO`,
            formContent: (props) => <RequestDemoForm {...props} />
        },
        {
            componentType: "get-quotes",
            title: `<span class="inline-color-span">GET</span> A QUOTE`,
            formContent: (props) => <GetQuoteForm {...props} />
        },
        {
            componentType: "send-email",
            title: `<span class="inline-color-span">SEND</span> EMAIL`,
            formContent: (props) => <SendEmailForm />
        }
    ],
    services: [
        {
            componentType: "view-services",
            title:`<span class="inline-color-span">OUR</span> SERVICES`,
            serviceContent: () => <ViewServices />
        }
    ]
}