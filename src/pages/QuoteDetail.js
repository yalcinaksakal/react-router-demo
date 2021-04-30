import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route> */}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
