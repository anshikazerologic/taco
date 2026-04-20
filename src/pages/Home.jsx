import React from "react";
import Hero from "../components/herosection/Hero";
import Profile from "../components/herosection/Profile";
import Eshora from "../components/herosection/Eshora";
import FollowSection from "../components/herosection/FollowUs";
import PartySection from "../components/herosection/Party";
import Plating from "../components/herosection/Plating";

export default function Home() {
  return (
    <>
    <Hero />
    <Profile/>
    <Eshora/>
    <FollowSection/>
    <PartySection/>
    <Plating/>
    </>
  );
}