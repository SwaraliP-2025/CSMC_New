import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import muncorpPic from "@/assets/muncorp_pic.png";

const Contact = () => {
  const { lang } = useLang();
  const en = lang === "en";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: en ? "Message received" : "संदेश प्राप्त",
      description: en ? "Our team will respond within 2 working days." : "आमची टीम २ कामकाजाच्या दिवसांत उत्तर देईल.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Get in touch" : "संपर्क साधा"}
        title={en ? "Municipal Contact" : "महानगरपालिका संपर्क"}
      />

      <section className="py-10 container max-w-4xl">

        {/* Building photo */}
        <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm border border-border">
          <img
            src={muncorpPic}
            alt="Chhatrapati Sambhajinagar Municipal Corporation Building"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Intro text */}
        <div className="mb-6">
          <h2 className="text-base font-bold text-civic-ink mb-3">
            {en ? "Contact No" : "संपर्क क्रमांक"}
          </h2>
          <hr className="border-border mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {en
              ? "Thank you for your interest in service of Chhatrapati Sambhajinagar Municipal Corporation. Please provide the following information about your needs in order to help us serve you better. This information will enable us to route your request to appropriate person."
              : "छत्रपती संभाजीनगर महानगरपालिकेच्या सेवेत आपल्या स्वारस्याबद्दल धन्यवाद. आम्हाला आपली अधिक चांगली सेवा करण्यासाठी कृपया खालील माहिती द्या."}
          </p>
        </div>

        {/* Key Contact table */}
        <div className="mb-10 border border-border rounded-lg overflow-hidden text-sm">
          <div className="bg-[#d6e4d6] px-4 py-2.5 font-bold text-civic-ink border-b border-border">
            {en ? "Key Contact" : "मुख्य संपर्क"}
          </div>
          <div className="divide-y divide-border bg-white">
            <div className="px-4 py-3">
              <p className="font-semibold text-civic-ink">Chhatrapati Sambhajinagar Municipal Corporation</p>
              <p className="text-muted-foreground mt-1">Telephone No.: 02402333536</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">Mobile No.: 0242333537</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">
                Email ID:{" "}
                <a href="mailto:contact@aurangabadmahapalika.org" className="text-civic-blue hover:underline">
                  contact@aurangabadmahapalika.org
                </a>
                {" / "}
                <a href="mailto:contact@chhsambhajinagarmc.org" className="text-civic-blue hover:underline">
                  contact@chhsambhajinagarmc.org
                </a>
              </p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">
                Address: Main Building, Town Hall, behind Post Office, Chhatrapati Sambhajinagar, Maharashtra 431001
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-[#d6e4d6] px-4 py-2.5 font-bold text-civic-ink border-b border-border">
            {en ? "Send us a Message" : "आम्हाला संदेश पाठवा"}
          </div>
          <form onSubmit={onSubmit} className="bg-white p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-civic-ink uppercase tracking-wider mb-1.5 block">
                  {en ? "Full Name" : "पूर्ण नाव"} *
                </label>
                <Input required placeholder={en ? "Your name" : "आपले नाव"}
                  className="rounded-lg border-border focus:border-civic-blue h-10 text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold text-civic-ink uppercase tracking-wider mb-1.5 block">
                  {en ? "Mobile No." : "मोबाईल क्र."} *
                </label>
                <Input required placeholder="10-digit mobile"
                  className="rounded-lg border-border focus:border-civic-blue h-10 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-civic-ink uppercase tracking-wider mb-1.5 block">
                {en ? "Email" : "ईमेल"}
              </label>
              <Input type="email" placeholder="you@example.com"
                className="rounded-lg border-border focus:border-civic-blue h-10 text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-civic-ink uppercase tracking-wider mb-1.5 block">
                {en ? "Subject" : "विषय"} *
              </label>
              <Input required placeholder={en ? "Brief subject" : "थोडक्यात विषय"}
                className="rounded-lg border-border focus:border-civic-blue h-10 text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-civic-ink uppercase tracking-wider mb-1.5 block">
                {en ? "Message" : "संदेश"} *
              </label>
              <Textarea required rows={4} placeholder={en ? "Write your message…" : "आपला संदेश लिहा…"}
                className="rounded-lg border-border focus:border-civic-blue text-sm resize-none" />
            </div>
            <Button type="submit"
              className="bg-civic-blue text-white hover:bg-civic-blue/90 px-8 py-2.5 rounded-lg font-bold text-sm">
              {en ? "Submit" : "सबमिट करा"}
            </Button>
          </form>
        </div>

      </section>
    </Layout>
  );
};

export default Contact;
