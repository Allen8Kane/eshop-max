"use client";

import { useEffect, useState } from "react";
import { getProfile } from "./actions";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/";
      }

      const user = JSON.parse(atob(token.split(".")[1]));

      console.log(user);

      const res = await getProfile(user.id);
      setProfile(res);
    };
    fetchProfile();
  }, []);

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
        Profile
      </h1>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          {profile?.email}
        </h2>
      </div>
    </main>
  );
};

export default Profile;
