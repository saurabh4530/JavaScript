//!      api CRUD opearation

//?  fetch data
// GET
let x1 = fetch("https://dummyjson.com/products");
x1.then((response) => {
  return response.json();
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//? post

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    name: "saurabh",
    age: 25,
    userId: 11,
    address: "pune",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("..........................................");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    userId: 2,
    name: "narendra",
    age: 50,
    address: "nashik",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("..........................................");

//? put

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "cipla",
    body: "ok",
    userId: 150696,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("..........................................");

//? patch
fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "PATCH",
  body: JSON.stringify({
    id: 1,
    title: "cipla",
    body: "well",
    userId: 150696,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("..........................................");

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then(() => console.log("Post deleted"))
  .catch((error) => console.error("Error:", error));

{
  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user?id=1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  // post
  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user", {
    method: "POST",
    body: JSON.stringify({
      firstame: "saurabh",
      name: "Saurabh Kakade",
      avatar: "avatar1",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  //put;

  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/2", {
    method: "PUT",
    body: JSON.stringify({
      firstame: "narendra",
      name: "Narendra modi",
      avatar: "PM",
      status: "unmarried",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // patch

  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/3", {
    method: "PATCH",
    body: JSON.stringify({
      name: "rahul gandhi",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // delete
  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/8", {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  //  we deleted 4th id and try to filled it again but not possible
  fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user", {
    method: "POST",
    body: JSON.stringify({
      firstame: "dipak",
      name: "dipak kale",
      avatar: "chhapari",
      id: "4",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// post multiple object
fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user", {
  method: "POST",
  body: JSON.stringify([
    {
      firstame: "prasad",
      name: "prasad kachale",
      avatar: "RObot",
    },
    {
      firstame: "samir",
      name: "samir inamdar",
      avatar: "krish",
    },
  ]),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


//////////////////////////////////////////////


  
let a = {
  firstame: "samir",
  name: "samir inamdar",
  avatar: "krish",
};

let b = {
    firstame: "ts",
    name:"dg",
    avatar:"kdd"
}

fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user", {
  method: "POST",
  body: JSON.stringify([a,b]),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  console.log("updated to git");



  {
    fetch("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user",{
      method:"POST",
      body:JSON.stringify({
        firstame: "tushar ",
        name:"patil tushar",
        avatar:"bahubali"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }