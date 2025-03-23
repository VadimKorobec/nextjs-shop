const BrandPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = await params;

  return <div>Page {slug}</div>;
};

export default BrandPage;
