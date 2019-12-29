import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { CompanyFilter } from "./CompanyFilter";
import { UserFilter } from "./UserFilter";
import { UserList } from "./UserList";

import "./App.css";

const App: React.FC = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        viewer {
          ...UserFilter_data
          ...UserList_data
        }
        savedUserInfo {
          userName
          age
        }
        savedUserName
      }
    `,
    {}
  );

  return (
    <div className="App">
      <header className="App-header">
        {data.savedUserInfo ? (
          <>
            <span>savedUserInfo.name: {data.savedUserInfo.userName}</span>
            <span>savedUserInfo.age: {data.savedUserInfo.age}</span>
          </>
        ) : (
          <span>No value saved</span>
        )}
        <span>
          savedUserName:{" "}
          {data.savedUserName ? data.savedUserName : "No value saved"}
        </span>
        <a
          className="App-link"
          href="https://relay.dev/docs/en/experimental/a-guided-tour-of-relay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Experimental Relay
        </a>

        <div className="App-container">
          <UserFilter data={data.viewer} className="App-column" />
          <UserList data={data.viewer} className="App-column" />

          <Suspense fallback={<div>Loading company filters ... </div>}>
            <CompanyFilter className="App-column" />
          </Suspense>
        </div>
      </header>
    </div>
  );
};

export default App;
