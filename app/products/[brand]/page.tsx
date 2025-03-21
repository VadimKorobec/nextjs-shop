const BrandPage = ({ params }: { params: { brand: string } }) => {
  
  return <div>`Page ${params.brand}`</div>;
};

export default BrandPage