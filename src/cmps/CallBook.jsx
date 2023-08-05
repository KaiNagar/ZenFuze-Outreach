import { InlineWidget } from 'react-calendly'
import { CallInfo } from './CallInfo'

export const CallBook = () => {
  return (
    <section className='call-book-container' id='book-a-call'>
      <div className='call-book container flex align-center justify-center'>
        <InlineWidget
          url='https://calendly.com/zenfuzeoutreach/15-minutes-demo-call'
          textColor='#EAA159'
          color='#EAA159'
          styles={{
            height: '1200px',
            width: '662px',
          }}
        />
        <CallInfo />
      </div>
    </section>
  )
}
