import Page from "@/app/homepage/page";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/homepage/homepage_sphere.jpg')" }}
    >
      <Page />
    </div>
  );
}
