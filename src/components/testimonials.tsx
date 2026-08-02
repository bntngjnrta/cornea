"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";
import { useT } from "@/i18n";

export default function Testimonials() {
  const t = useT();
  const [first, second, third, fourth] = t.testimonials.items;

  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              {t.testimonials.heading}
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>{t.testimonials.subheading}</p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            {/* Large featured card */}
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
              <CardHeader>
                <div className="text-lg font-semibold tracking-tight">{first.brand}</div>
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">{first.quote}</p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback>{first.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">{first.name}</cite>
                      <span className="text-muted-foreground block text-sm">{first.role}</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Wide card */}
            <Card className="md:col-span-2">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">{second.quote}</p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback>{second.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">{second.name}</cite>
                      <span className="text-muted-foreground block text-sm">{second.role}</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small card 1 */}
            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>{third.quote}</p>
                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarFallback>{third.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">{third.name}</cite>
                      <span className="text-muted-foreground block text-sm">{third.role}</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small card 2 */}
            <Card className="card variant-mixed">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>{fourth.quote}</p>
                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback>{fourth.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{fourth.name}</p>
                      <span className="text-muted-foreground block text-sm">{fourth.role}</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
