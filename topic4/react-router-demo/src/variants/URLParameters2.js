import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


export default function BasicUrlParamsExample() {
    return (
        <Router>
            <Switch>
                <Route path="/blog/:slug">
                    <BlogPost />
                </Route>
            </Switch>
        </Router>
    );
}


function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

