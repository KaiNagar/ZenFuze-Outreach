export const UserImg = ({
  user,
  width = 200,
  height = 200,
  borderWidth = 5,
}) => {
  return (
    <section
      className='user-img'
      style={{
        backgroundImage: 'url(' + user.imgUrl + ')',
        width: width + 'px',
        height: height + 'px',
        border: `${borderWidth}px solid #eaa159`,
      }}
    ></section>
  )
}
