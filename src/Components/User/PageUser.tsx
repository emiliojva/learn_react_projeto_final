import React from "react";
import { Route, Routes } from "react-router-dom";
import PageUserFeed from "./PageUserFeed";
import PageUserPhotoPost from "./PageUserPhotoPost";
import PageUserStats from "./PageUserStats";
import UserHeader from "./UserHeader";

const PageUser = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<PageUserFeed />}></Route>
        <Route path="/postar" element={<PageUserPhotoPost />}></Route>
        <Route path="/estatiticas" element={<PageUserStats />}></Route>
      </Routes>
    </section>
  );
};

export default PageUser;
