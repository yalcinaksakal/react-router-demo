import React, { Suspense, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// import Comments from "../components/comments/Comments";
const Comments = React.lazy(() => import("../components/comments/Comments"));

const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //   loading
  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  //error
  if (error) return <p className="centered">{error}</p>;
  //completed but no quotes
  if (status === "completed" && !loadedQuote.text)
    return <p>No quote found!</p>;

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>{" "}
      </Suspense>
    </>
  );
};

export default QuoteDetail;
