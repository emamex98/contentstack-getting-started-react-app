import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Button } from "@contentstack/venus-components";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const homePageData = useSelector(
    (state: RootState) => state.main.homePageData
  );
  const navigate = useNavigate();

  const memoizedHomePageData = useMemo(() => homePageData, [homePageData]);

  return (
    <div className="home-page">
      <section className="article">
        <h1>{(memoizedHomePageData as any).title}</h1>
        <p>{(memoizedHomePageData as any).entry_body}</p>
      </section>

      <section className="author-info">
        <p>
          Authored by <b>{(memoizedHomePageData as any).author[0].name}</b>
        </p>
        <p>
          Published on <b>{(memoizedHomePageData as any).publish_date}</b>
        </p>
      </section>
    </div>
  );
};

export default Home;
