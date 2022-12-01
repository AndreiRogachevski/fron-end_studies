export default function User({ user }) {
  return (
    <>
      <td>{user.firstName + ' ' + user.lastName}</td>
      <td>{user.company.department}</td>
      <td>{user.company.address.city}</td>
      <td>{user.age}</td>
      <td>{user.email}</td>
    </>
  );
}
