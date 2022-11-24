export function getAllUsers(page, perPage) {
  return (async () => {
    const response = await fetch(
      `https://reqres.in/api/users/?page=${page}&per_page=${perPage}`
    );
    const json = await response.json();
    return json;
  })();
}

export function singleUser(id) {
  return (async () => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const user = await response.json();
    return user;
  })();
}

export function createUser(name, job) {
  return (async () => {
    const response = await fetch('https://reqres.in/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, job }),
    });
    if (response.ok) {
      console.log(`status:${response.status}\n User successfully create`);
    }
  })();
}

export function updateUser(name, job) {
  return (async () => {
    const response = await fetch('https://reqres.in/api/users/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, job }),
    });
    if (response.ok) {
      console.log(`status:${response.status}\n User successfully edited`);
    }
  })();
}

export function deleteUser(id) {
  return (async () =>
    await fetch('https://reqres.in/api/users/' + id, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        return console.log(
          `status:${response.status}\n User successfully deleted`
        );
      }
    }))();
}
