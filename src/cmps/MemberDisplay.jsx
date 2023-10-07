import { UserImg } from './UserImg'

export const MemberDisplay = ({ member }) => {
  return (
    <section className='member-display flex column align-center'>
      <UserImg user={member} width={150} height={150} borderWidth={3} />
      <h1 className='member-name-header'>{member.username}</h1>
      <h3 className='member-title-header'>{member.title}</h3>
      <span className='member-desc'>{member.desc}</span>
    </section>
  )
}
