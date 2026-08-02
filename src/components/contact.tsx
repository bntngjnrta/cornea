"use client";

import { Mail, PhoneCall, CheckCircle, Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollView } from "./scroll-view";
import React, { useState } from "react";
import { useT } from "@/i18n";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? t.contact.errorFallback);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : t.contact.errorFallback);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  {t.contact.heading}
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">{t.contact.subheading}</p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Mail className="size-5 mr-2 inline shrink-0" />
                  <span>corneastd@gmail.com</span>
                </li>
                <li>
                  <PhoneCall className="size-5 mr-2 inline shrink-0" />
                  <span>+62 823-4196-4708</span>
                </li>
                <li>
                  <MapPin className="size-5 mr-2 inline shrink-0" />
                  <span>Cikarang, Jawa Barat</span>
                </li>
              </ul>
            </ScrollView>
          </div>

          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                {status === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <CheckCircle className="size-12 text-green-500" />
                    <p className="text-lg font-medium">{t.contact.successTitle}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.successBody}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => setStatus("idle")}
                    >
                      {t.contact.sendAnotherBtn}
                    </Button>
                  </div>
                ) : (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold">{t.contact.formTitle}</h3>
                      <p className="mt-4 text-sm text-muted-foreground">{t.contact.formSubtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6 *:space-y-3">
                      <div>
                        <Label htmlFor="contact-name">
                          {t.contact.namePlaceholder}{" "}<span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="contact-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">
                          {t.contact.emailPlaceholder}{" "}<span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="contact-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-msg">
                          {t.contact.messagePlaceholder}{" "}<span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Textarea
                          id="contact-msg"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-destructive">{errorMsg}</p>
                      )}

                      <div>
                        <Button type="submit" className="w-full" disabled={status === "loading"}>
                          {status === "loading" ? (
                            <>
                              <Loader2 className="mr-2 size-4 animate-spin" />
                              {t.contact.sendingBtn}
                            </>
                          ) : (
                            t.contact.submitBtn
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
