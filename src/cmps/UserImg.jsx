export const UserImg = ({ user }) => {
  return (
    <section
      className='user-img'
      style={{ backgroundImage: 'url(' + user.imgUrl + ')' }}
    ></section>
  )
}
