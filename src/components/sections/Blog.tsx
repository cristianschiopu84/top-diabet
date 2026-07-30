import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-light-gray/60 via-white to-light-gray/65 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Blog"
            title="Ultimele articole"
            description="Informații clare și practice despre diabet, nutriție și stil de viață."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-white/80 shadow-lg shadow-primary/8 ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/15">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs font-medium uppercase tracking-wide text-secondary">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-5">
                    <Button href={`/blog/${post.slug}`} variant="ghost" className="px-4 py-2.5">
                      Citește
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
