import React from "react";
import { supabase } from "../utils/supabaseClient";

export const Profile = () => {
  const [profiles, setProfiles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  async function getProfiles() {
    try {
      setLoading(true);
      //   const user = supabase.auth.user();

      let { data, error, status } = await supabase.from("profiles").select(`*`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfiles(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    getProfiles();
  }, []);

  console.log(profiles);
  return <div>Profile</div>;
};
