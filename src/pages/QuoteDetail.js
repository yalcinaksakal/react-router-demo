import { useParams } from "react-router";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;
