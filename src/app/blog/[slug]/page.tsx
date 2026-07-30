import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Articol negăsit" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-gradient-to-b from-light-gray to-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <time className="text-sm font-medium uppercase tracking-wide text-secondary">
          {post.date}
        </time>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
        <div className="relative mt-8 h-64 overflow-hidden rounded-[1.5rem] sm:h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
          <p>
            La clinica Dr. Diana Drăgoi, educația medicală este parte esențială din
            îngrijire.
            Articolul de față rezumă principii practice pe care le discutăm frecvent
            în consultații — adaptate nevoilor fiecărui pacient.
          </p>
          <p>
            Pentru un plan personalizat de control al diabetului, nutriție sau
            monitorizare continuă, programează o consultație cu echipa noastră.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={SITE.phoneHref}>Programează-te</Button>
          <Button href="/#blog" variant="secondary">
            Înapoi la blog
          </Button>
        </div>
      </Container>
    </article>
  );
}
