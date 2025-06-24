import { MarkdownContent } from '@/components/common/MarkdownContent';
import { api } from '../../../libs/api';
import { notFound } from 'next/navigation';

interface ExpertPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExpertPage({ params }: ExpertPageProps) {
  const { id } = await params;
  let expert = null;
  try {
    const res = await api(`exports/${id}`);
    expert = res.data;
    if (!expert) return notFound();
  } catch {
    return notFound();
  }

  return (
    <div className="w-full min-h-screen mt-26 px-10 md:px-20 lg:px-40">
      <h1 className="text-center text-2xl font-bold py-4 ">{expert.name}</h1>
      <p className="text-center text-lg mb-4">{expert.practice}</p>

      <MarkdownContent content={expert.content || ''} />
    </div>
  );
}
