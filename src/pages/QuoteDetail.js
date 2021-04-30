import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "ya", text: "quotes are being tested" },
  { id: "q2", author: "nes", text: "wash the dishes" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();

  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if (!quote) return <p>No quote found!</p>;
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
