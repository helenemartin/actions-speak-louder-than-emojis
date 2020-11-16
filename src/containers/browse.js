import React, { useState, useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "LN",
    photoURL: "1"
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/portrait.png"
              alt="Netflix"
            />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Header.Group>
        </Header.Frame>
      </Header>
      <Header.Feature>
        <Header.FeatureCallOut>Watch Poker Now</Header.FeatureCallOut>
        <Header.Text>
          Forever alone at home, shield yourself from futile attempts to feel
          like part of the world, play poker.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
