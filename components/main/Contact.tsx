"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        "service_277b2go",    // Replace with your service ID
        "template_oqhmh6o",   // Replace with your template ID
        formRef.current,
        "h26yq5UI9QRjwgYYp"     // Replace with your public key
      );

      setSuccessMessage("✅ Your message has been sent successfully!");
      formRef.current.reset();
    } catch (error) {
      setErrorMessage("❌ Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleInputChange = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <section id="contacts" className="w-full h-full max-sm:px-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <CardTitle className="mx-auto text-4xl py-12 pointer-events-none">Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Connect
          </span></CardTitle>
        <Card
          className="relative w-full max-sm:max-w-full max-w-[450px] overflow-hidden z-20 bg-transparent"
        >
          <CardHeader>
            <CardTitle className="mx-auto text-[26px] text-center">Send me a massege</CardTitle>
            <CardDescription className="flex justify-center items-center">
              Feel free to send me a message anytime!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid w-full items-center gap-4 pb-[15px]">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    onChange={handleInputChange}
                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  ></textarea>
                </div>
              </div>
              <RainbowButton className="w-full text-black font-bold text-[15px] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Submit"}
              </RainbowButton>
              
              {/* ✅ Message Feedback */}
              {successMessage && (
                <p className="mt-4 text-green-600 text-sm">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="mt-4 text-red-600 text-sm">{errorMessage}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
