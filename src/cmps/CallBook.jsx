import { InlineWidget } from 'react-calendly'
import { CallInfo } from './CallInfo'

export const CallBook = () => {
  return (
    <section className='call-book-container' id='book-a-call'>
      <div className='call-book container flex'>
        <InlineWidget
          url='https://calendly.com/zenfuzeoutreach/15-minutes-demo-call'
          textColor='#EAA159'
          color='#EAA159'
          styles={{
            height: '1120px',
            width: '662px',
            boxShadow: '0 0 15px 5px #eaa15961',
            overflow:'hidden !important'
          }}
        />
        <CallInfo />
      </div>
    </section>
  )
}
