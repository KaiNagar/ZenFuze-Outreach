import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-scroll'
import { zfoService } from '../services/zfo.service'
import { QuestionsList } from './QuestionsList'

export const QandA = () => {
  const [currQuestionId, setCurrQuestionId] = useState()
  const questions = zfoService.getQuestions()
  // const { t } = useTranslation()

  const onToggleQuestion = (id) => {
    if (currQuestionId === id) return setCurrQuestionId(-1)
    setCurrQuestionId(id)
  }
  return (
    <section className='qanda-container'>
      <div className='qanda container flex column'>
        <h1 className='qanda-header'>Frequently Asked Questions:</h1>
        <QuestionsList
          onToggleQuestion={onToggleQuestion}
          questions={questions}
          currQuestionId={currQuestionId}
        />
        {/* <Link
          className='book-call-btn flex column'
          to='book-a-call'
          smooth={true}
          offset={0}
          duration={200}
        >
          <span className='btn-big-text'>{t('book_call_btn_big_txt')}</span>
          <span className='btn-small-text'>{t('book_call_btn_small_txt')}</span>
        </Link> */}
      </div>
    </section>
  )
}
