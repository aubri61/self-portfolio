export default function SectionTitle({
  params,
}: {
  params?: { title: string };
}) {
  return (
    <div className="pt-5 flex justify-center items-center text-4xl text-gray-700">
      {params?.title}
    </div>
  );
}
