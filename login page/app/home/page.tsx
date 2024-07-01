import router, { redirect } from "next/navigation";

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.
  // var token = window.localStorage.getItem("token");
  // if (token === "12345") {
  redirect("/");
  // } else {
  //   return;
  // }

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return res.json()
}

export default async function Home() {
  const PageRouting = await getData();

  return (
    <>
      <Home />
    </>
  );
}
