import Page from "@/app/homepage/page";
import {JSX} from "react";

export default function Home(): JSX.Element {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/homepage/homepage_sphere.jpg')" }}
    >
      <Page />
    </div>
  );
}
