import { zfoService } from '../services/zfo.service'
import { MemberDisplay } from './MemberDisplay'

export const TheTeam = () => {
  const team = zfoService.getAllMembers()

  return (
    <section className='the-team-container'>
      <div className='the-team container'>
        <h1 className='our-team-header'>Meet Our Team</h1>
        <div className='members-container'>
          {team.map((member) => (
            <MemberDisplay key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
