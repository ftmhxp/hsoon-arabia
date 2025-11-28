interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>صفحة خدمة ديناميكية</h1>
      <p>Service slug: {slug}</p>
    </main>
  );
}
