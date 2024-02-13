import UserCard from "@/components/userCards";
import UserData from "@/types/userData";

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=10");
  if (res.ok) {
    const data = await res.json();
    console.log("data", data.results);
    return data.results as UserData[];
  } else return [] as UserData[];
}

export default async function Home() {
  const users = await getData();

  if (users.length === 0) return <data>Fetching</data>;

  return (
    <div>
      {users &&
        users.map((user: UserData) => {
          return <UserCard key={user.email} user={user} />;
        })}{" "}
    </div>
  );
}
