import React from "react";
import { useState, useEffect } from "react";

function Card() {
  useEffect(() => {
    let arr = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => addData(result));
  }, []);
}
