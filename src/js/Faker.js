import React from "react";
import { useFaker } from "react-fakers";

const Faker = () => {
  const { success, error, loading } = useFaker();

  if (error) {
    alert(error.message);
  }

  return (
    <>
      {!loading && <h4>Loading....</h4>}
      <ul>
        {loading &&
          success.map((val, id) => (
            <li key={val.uuid}>
              {val.firstname} {val.lastname} - {val.email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Faker;
